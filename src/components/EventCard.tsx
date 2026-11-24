import { NavLink } from "react-router";
import type { PlusOneEvent } from "../types/types";


export default function EventCard(props:{event:PlusOneEvent}) {
    const {title, location, starts_at, ends_at, id} = props.event

    const startInfo = new Date(starts_at)
    const readableDate = startInfo.toDateString()

    const readableStartTime = `${startInfo.getHours()}:${startInfo.getMinutes()<10?`0`:''}${startInfo.getMinutes()}${startInfo.getHours()>=12?`pm`:`am`}`

    const durationMinutes = ((new Date(ends_at).getTime()) - startInfo.getTime()) /60000
    const durationHours = Math.floor(durationMinutes/60)
    const durationString = `${durationHours} hour${durationHours>1?`s`:``}${(durationMinutes%60)>0?` ${durationMinutes%60} mins`:``}`

    return (
        <NavLink to={`/events/${id}`}>
            <li key={id} aria-label={`list item for event ${title}`}>
                <p>Event: {title}</p>
                <p>{readableDate}, beginning at {readableStartTime}</p>  
                <p>Duration: {durationString}</p>
                <p>Location: {location}</p>
            </li>
        </NavLink>
    )
}