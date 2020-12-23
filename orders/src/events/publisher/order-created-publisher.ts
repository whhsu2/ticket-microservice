import { Publisher, OrderCreatedEvent, Subjects } from '@morreezus/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated
}