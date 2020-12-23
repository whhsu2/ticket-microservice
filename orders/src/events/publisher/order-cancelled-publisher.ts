import { Publisher, OrderCancelledEvent, Subjects } from '@morreezus/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}