import { Publisher, TicketCreatedEvent, Subjects } from '@morreezus/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}