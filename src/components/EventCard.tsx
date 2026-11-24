import { NavLink } from "react-router";
import type { PlusOneEvent } from "../types/types";
import parseTime from '../utils/parseTime'


export default function EventCard(props:{event:PlusOneEvent}) {
    const {title, location, starts_at, ends_at, id} = props.event

    const {readableDate,readableStartTime,readableDuration} = parseTime(starts_at,ends_at)

    return (
        <NavLink className='event-card' to={`/events/${id}`}>
            <li  key={id} aria-label={`list item for event ${title}`}>
                <h3>Event: {title}</h3>
                <p>{readableDate}, beginning at {readableStartTime}</p>  
                <p>Duration: {readableDuration}</p>
                <p>Location: {location}</p>
            </li>
        </NavLink>
    )
}