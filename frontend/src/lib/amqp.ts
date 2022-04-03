import celery from "celery-node";

let client;


export async function getClient(): Promise<ReturnType<typeof celery.createClient>> {
    if (!client) {
        client = celery.createClient("amqp://wwkyewii:GVDAck0SA9DuttfOGeokCw_wS3zutmnD@sparrow.rmq.cloudamqp.com/wwkyewii", "amqp://wwkyewii:GVDAck0SA9DuttfOGeokCw_wS3zutmnD@sparrow.rmq.cloudamqp.com/wwkyewii", "safety-ping")
    }
    return client;

}