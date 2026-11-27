import addRsvp from "../api/rsvps";

type ButtonStatus = 'going'|'notGoing'|'unauthenticated'

export default function RsvpButton(props:{status:ButtonStatus,onClick:()=>void}) {
    
    const {status,onClick} = props;
    
    if (status === 'going') {
        return <button type='button'>Cancel RSVP</button>;
    } else if (status === 'notGoing') {
        return <button type='button' onClick={onClick}>RSVP</button>;
    } else {
        return <></>;
    };

}