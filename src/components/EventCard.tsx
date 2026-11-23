import type { PlusOneEvent } from "../../types/types";


export default function EventCard(props:{event:PlusOneEvent}) {
    const {title, location, starts_at, ends_at, id} = props.event
    return (
        <li key={id} aria-label={`list item for event ${title}`}>
            <p>Event: {title}</p>
            <p>Start: {starts_at}</p>     
            <p>End: {ends_at}</p>
            <p>Location: {location}</p>
        </li>
    )
}       // to do: format date and time nicely, check if end is after start