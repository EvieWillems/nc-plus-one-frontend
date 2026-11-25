import { useSingleEvent } from "../hooks/useSingleEvent";
import parseTime from '../utils/parseTime'



export default function SingleEvent(props:{id:number}) {

    const result = useSingleEvent(props.id)

    if (result.status === 'success') {
        const {id,title,starts_at,ends_at,location,description,capacity,address} = result.results
        const {readableDate,readableStartTime,readableDuration} = parseTime(starts_at,ends_at)
        return (
            <section className='event-card' key={id}>
              <h3>{title}</h3>
              <p className='description'>{description}</p>
              <p>Start: {readableDate} at {readableStartTime}</p>
              <p>Duration: {readableDuration}</p>
              <p>Venue: {location} {'('}capacity: {capacity}{')'}</p>
              <p>{address}</p>
            </section>
            )
    }
    return <p>error</p>
    
}