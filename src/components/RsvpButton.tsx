type ButtonStatus = 'going'|'notGoing'|'unauthenticated'

export default function RsvpButton(props:{status:ButtonStatus}) {
    
    const {status} = props;
    
    if (status === 'going') {
        return <button type='button'>Cancel RSVP</button>;
    } else if (status === 'notGoing') {
        return <button type='button'>RSVP</button>;
    } else {
        return <></>;
    };

}