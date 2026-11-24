import { NavLink } from "react-router";
import type { PlusOneEvent, ReadableDateInfo} from "../types/types";


export function parseTime(start:string,end:string):ReadableDateInfo {
    const startInfo = new Date(start)
    const readableDate = startInfo.toDateString()

    const readableStartTime = `${startInfo.getHours()}:${startInfo.getMinutes()<10?`0`:''}${startInfo.getMinutes()}${startInfo.getHours()>=12?`pm`:`am`}`

    const durationMinutes = ((new Date(end).getTime()) - startInfo.getTime()) /60000
    const durationHours = Math.floor(durationMinutes/60)
    const readableDuration = `${durationHours} hour${durationHours>1?`s`:``}${(durationMinutes%60)>0?` ${durationMinutes%60} mins`:``}`

    return {
        readableDate:readableDate,
        readableStartTime:readableStartTime,
        readableDuration:readableDuration
    }
}


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