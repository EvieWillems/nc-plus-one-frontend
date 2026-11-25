import type { EventsListFilter, EventFullDetail, PlusOneEvent } from "../types/types";
import apiGet from "./client";


export function getEventsList(filter:EventsListFilter):Promise<{events:PlusOneEvent[]}> {
    if (filter === 'all') {
        return apiGet(import.meta.env.VITE_API_URL+'/events')
    } else {
        return apiGet(import.meta.env.VITE_API_URL+'/events')   // to do: add api endpoint to filter events by user's rsvp
    }
}

export function getSingleEvent(id:number):Promise<{event:EventFullDetail[]}> {
    return apiGet(import.meta.env.VITE_API_URL+'/events/:'+id.toString())
}