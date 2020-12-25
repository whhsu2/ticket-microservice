import mongoose from 'mongoose'
import { app } from './app'
import { natsWrapper } from './nats-wrapper'
import { TicketUpdatedListener } from './events/listener/ticket-updated-listener'
import { TicketCreatedListener } from './events/listener/ticket-created-listener'
import { ExpirationCompleteListener } from './events/listener/expiration-complete-listener'

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined')
    }    

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

        new TicketCreatedListener(natsWrapper.client).listen()
        new TicketUpdatedListener(natsWrapper.client).listen()
        new ExpirationCompleteListener(natsWrapper.client).listen()

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Connected to MongoDB!!!")
    } catch (error) {
        console.log(error)
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!!!!!!!!');
      });
}

start()