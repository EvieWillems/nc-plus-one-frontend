import { useEventsList } from "../hooks/useEventsList";
import { useSingleEvent } from "../hooks/useSingleEvent";
import ErrorPage from "../pages/ErrorPage";
import {parseTime,parseDuration} from '../utils/parseTime'
import RsvpButton from "./RsvpButton";



export default function SingleEvent(props:{id:number}) {

    const result = useSingleEvent(props.id)
    const usersRsvps = useEventsList('rsvpd')

    if (result.status === 'success') {
        const {id,title,starts_at,ends_at,location,description,capacity,address} = result.results
        const {readableDate,readableStartTime} = parseTime(starts_at)
        const readableDuration = ends_at&&parseDuration(starts_at,ends_at)

        return (
            <section className='event-card' key={id}>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <p>Start: {readableDate} at {readableStartTime}</p>
                {ends_at?<p>Duration: {readableDuration}</p>:<></>}
                <p>Venue: {location} {'('}capacity: {capacity}{')'}</p>
                <p>{address}</p>
                {usersRsvps.status === 'success'&&<RsvpButton content={{eventId:id,usersRsvps:usersRsvps.results}}/>}
            </section>
            );
    }
    return <ErrorPage message='Unable to load event'/>;
    
}