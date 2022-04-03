import { fire } from '$lib/firebase';
import type { Group, GroupMember } from '$lib/models';

import { doc, getDoc } from "$lib/firebase/firestore";

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	// `params.id` comes from [id].js
    const {id} = params




	const groupCollection = fire.storeModule.collection(fire.store, 'groups');
	const groupQuery = fire.storeModule.query(
		groupCollection,
		fire.storeModule.where('members', 'array-contains', id)
	);

	const results = await fire.storeModule.getDocs<Group>(groupQuery);

	const groups = results.docs;
    const GroupMemberCollection = fire.storeModule.collection(fire.store, 'GroupMember');

	const updatedGroups = groups.map((group: Group) => {
		const member = group.members.find((member: GroupMember) => member.user.uid === id);
        
        const memberQuery = fire.storeModule.update<GroupMember>(
            GroupMemberCollection,
            fire.storeModule.where('user', 'array-contains', id)
        )
        // const groupQuery = fire.storeModule.query<Group>(
        //     groupCollection,
        //     fire.storeModule.where('members', 'array-contains', $state.user.uid)
        // );
	});

	return {
		status: 404
	};
}
