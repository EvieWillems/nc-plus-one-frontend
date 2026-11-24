

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

export interface EventFullDetail extends PlusOneEvent {
    description:string;
    capacity:number;
    address:string;
    created_at:string;
}


export type PageStatus<T extends PlusOneEvent|PlusOneEvent[]> =
    | {status: 'loading'}
    | {status: 'error'; message:string}
    | {status: 'success'; results:T}