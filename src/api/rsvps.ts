import { readToken } from "../auth/tokenManager";
import apiGet from "./client";


export default function addRsvp(eventId:number) {
    const token = readToken()
    const fetchArgs = {
        method:'POST' as const,
        headers: {Authorization: `Bearer ${token}`}
    }
    console.log(eventId)
    apiGet<void>('/events/:'+eventId.toString()+'/rsvp',fetchArgs)
}