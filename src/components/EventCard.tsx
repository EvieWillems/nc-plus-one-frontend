import { NavLink } from "react-router";
import type { PlusOneEvent } from "../types/types";
import  { parseTime,parseDuration } from '../utils/parseTime'
import type { ReactNode } from "react";


export default function EventCard(props:{event:PlusOneEvent,button:ReactNode}) {
    const {title, location, starts_at, ends_at, id} = props.event
    const button = props.button

    const {readableDate,readableStartTime} = parseTime(starts_at)
    const readableDuration = ends_at&&parseDuration(starts_at,ends_at)

    return (
        <NavLink className='event-card' to={`/events/${id}`}>
            <li  key={id} aria-label={`list item for event ${title}`}>
                <h3>Event: {title}</h3>
                <p>{readableDate}, beginning at {readableStartTime}</p>  
                {ends_at?<p>Duration: {readableDuration}</p>:<></>}
                <p>Location: {location}</p>
                {button}
            </li>
        </NavLink>
    )
}