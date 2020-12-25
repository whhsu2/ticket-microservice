import { Subjects, Publisher, ExpirationCompleteEvent } from '@morreezus/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}