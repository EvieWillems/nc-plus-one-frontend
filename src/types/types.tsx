

export type EventsListFilter =
    |'all'
    |'rsvpd'

export interface PlusOneEvent {
    id:number;
    title:string;
    starts_at:string;
    ends_at:string;
    location:string;
}

export interface EventPayload {
    events:PlusOneEvent[]
}

export type PageStatus<T extends EventPayload|PlusOneEvent> =
    | {status: 'loading'}
    | {status: 'error'; message:string}
    | {status: 'success'; results:T}