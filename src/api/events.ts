import { readToken } from "../auth/tokenManager";
import type { EventsListFilter, EventFullDetail, PlusOneEvent, FetchArgs } from "../types/types";
import apiGet from "./client";


export function getEventsList(filter:EventsListFilter):Promise<{events:PlusOneEvent[]|EventFullDetail[]}> {
    if (filter === 'all') {
        return apiGet('/events');
    } else {
        const token = readToken();
        if (token === null) {
            throw new Error('unauthorised')
        } else {
            const fetchArgs:FetchArgs = {
                headers: {Authorization: `Bearer ${token}`},
            };
            return apiGet('/events/myrsvps',fetchArgs);
        }
    }
}

export function getSingleEvent(id:number):Promise<{event:EventFullDetail[]}> {
    return apiGet('/events/:'+id.toString())
}