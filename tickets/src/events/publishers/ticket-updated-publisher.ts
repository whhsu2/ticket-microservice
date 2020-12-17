import { Publisher, TicketUpdatedEvent, Subjects } from '@morreezus/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}