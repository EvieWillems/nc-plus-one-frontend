import type {MouseEvent} from "react";
import { addRsvp, deleteRsvp } from "../api/rsvps";
import type { PlusOneEvent } from "../types/types";
import { readToken } from "../auth/tokenManager";

type ButtonStatus = 'going'|'notGoing'|'unauthenticated'

export function buttonContent (eventId:number,usersRsvps:PlusOneEvent[]) {
    if (!readToken()) return 'unauthenticated'
    if (usersRsvps.map((ev)=>ev.id).includes(eventId)) {
        return 'going'
    };
    return 'notGoing';
}

export default function RsvpButton(props:{content:{eventId:number,usersRsvps:PlusOneEvent[]}}) {
    
    const {eventId,usersRsvps} = props.content;

    const buttonContent = (eventId:number,usersRsvps:PlusOneEvent[]) => {
        if (!readToken()) return 'unauthenticated'
        if (usersRsvps.map((ev)=>ev.id).includes(eventId)) {
            return 'going'
        };
        return 'notGoing';
    };

    const status = buttonContent(eventId,usersRsvps)
    
    const handleClick = (e:MouseEvent) => {
        e.preventDefault();
        if (status === 'going') {
            deleteRsvp(eventId)
        } else {
            addRsvp(eventId)
        };
    };

    if (status !== 'unauthenticated') {
        return (
            <button type='button' onClick={handleClick}>
                {status==='going'?'Cancel RSVP':'RSVP'}
            </button>
        );
    } else {
        return <></>;
    };

}