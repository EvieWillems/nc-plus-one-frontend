import type {MouseEvent} from "react";
import { addRsvp, deleteRsvp } from "../api/rsvps";

type ButtonStatus = 'going'|'notGoing'|'unauthenticated'

export default function RsvpButton(props:{content:{status:ButtonStatus,eventId:number}}) {
    
    const {status,eventId} = props.content;
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
            {status==='going'?'Cancel RSVP':'Rsvp'}
        </button>
        );
    } else {
        return <></>;
    };

}