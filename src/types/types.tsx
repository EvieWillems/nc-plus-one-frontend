

export type EventsListFilter =
    |'all'
    |'rsvpd'

export interface PlusOneEvent {
    id:number;
    title:string;
    starts_at:string;
    ends_at?:string;
    location:string;
}

export interface EventFullDetail extends PlusOneEvent {
    description:string;
    capacity:number;
    address:string;
    created_at:string;
}

export type PageStatus<T> =
    | {status: 'loading'}
    | {status: 'error'; message:string}
    | {status: 'success'; results:T}

export interface ReadableDateInfo {
    readableDate:string;
    readableStartTime:string;
}

export interface LoginDetails {
    name?:string;
    email:string;
    password:string;
}


export interface UserDetails extends LoginDetails {
    id:number;
    name:string;
    email:string;
    created_at:string;
}

export interface FetchArgs {
    method?:'POST'|'GET'|'DELETE';
    headers: {'Content-Type':'application/json'}|{Authorization:string};
    body?: string;
}

export type UserStatus = 
    | {status:'loading'}
    | {status:'anonymous'}
    | {status:'authenticated'; userDetails:UserDetails}
    | {status:'error'; message:string}

export interface FrontendError {
    code?:number;
    message:string;
}

export interface BackendError {
    error:string;
    detail:string;
}