import { Subjects, Publisher, PaymentCreatedEvent } from '@morreezus/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}