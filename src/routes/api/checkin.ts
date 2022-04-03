import { getClient } from '$lib/amqp';
import pubKeys from '$lib/googlePubKeys';
import type { RequestHandlerOutput } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit/types/internal';

import {jwtVerify} from "jose";

export const post = async ({request}: RequestEvent): Promise<RequestHandlerOutput> => {
    const body = await request.json();
    const valid = await Promise.allSettled(pubKeys.map(async (k) => jwtVerify(body.token, await k)))
    if (!valid.some(v => v.status === 'fulfilled')) {
        return {
            status: 403
        }
    }
    const token = valid.find(v => v.status === "fulfilled")
    if (token.status !== "fulfilled") throw new Error()
    const {user_id} = token.value.payload
    const client = await getClient()

    console.log(client.sendTask("main.check_in", [user_id, new Date(Date.now() + 1000 * 1).toISOString()], {}, user_id as string))

	return {
		status: 200
	};
};
