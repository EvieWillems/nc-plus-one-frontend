import { addRsvp, deleteRsvp } from "../api/rsvps";

type ButtonStatus = 'going'|'notGoing'|'unauthenticated'

export default function RsvpButton(props:{content:{status:ButtonStatus,eventId:number}}) {
    
    const {status,eventId} = props.content;
    
    if (status === 'going') {
        return <button type='button' onClick={()=>deleteRsvp(eventId)}>Cancel RSVP</button>;
    } else if (status === 'notGoing') {
        return <button type='button' onClick={()=>addRsvp(eventId)}>RSVP</button>;
    } else {
        return <></>;
    };

}