import { natsWrapper } from './nats-wrapper'
import { OrderCreatedListener } from './events/listener/order-created-listener'

const start = async () => {
    console.log("Starting ...")
    if (!process.env.NATS_CLIENT_ID) {
        throw new Error('MONGO_URI must be defined')
    }    

    if (!process.env.NATS_URL) {
        throw new Error('MONGO_URI must be defined')
    }    

    if (!process.env.NATS_CLUSTER_ID) {
        throw new Error('MONGO_URI must be defined')
    }    

    try {
        await natsWrapper.connect(process.env.NATS_CLUSTER_ID, process.env.NATS_CLIENT_ID, process.env.NATS_URL)
        natsWrapper.client.on('close', () => {
            console.log('NATs connection closed!')
        })

        process.on('SIGINT', () => natsWrapper.client.close())
        process.on('SIGTERM', () => natsWrapper.client.close())

        new OrderCreatedListener(natsWrapper.client).listen()
    } catch (error) {
        console.log(error)
    }
}

start()