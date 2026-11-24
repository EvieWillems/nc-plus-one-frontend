

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

export interface ReadableDateInfo {
    readableDate:string;
    readableStartTime:string;
    readableDuration:string
}

export interface LoginDetails {
    email:string;
    password:string;
}

export interface UserDetails extends LoginDetails {
    id:number;
    created_at:string;
}

export interface FetchArgs {
    method:'POST'|'GET'|'DELETE';
    headers: {'Content-Type':'application/json'};
    body: string;
}