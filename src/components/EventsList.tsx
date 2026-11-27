import type { EventsListFilter, PlusOneEvent } from "../types/types";
import { useEventsList } from "../hooks/useEventsList";
import EventCard from "./EventCard";
import NotFoundPage from "../pages/NotFoundPage";
import EmptyPage from "../pages/EmptyPage";
import RsvpButton from './RsvpButton'



export default function EventsList (props:{filter:EventsListFilter}) {

    const results = useEventsList(props.filter)
    const usersRsvps = useEventsList('rsvpd')

    const buttonContent = (event:PlusOneEvent) => {
        if (usersRsvps.status === 'success') {
            if (usersRsvps.results.map((ev)=>ev.id).includes(event.id)) {
                return 'going'
            }
            return 'notGoing'
        } else {
            return 'unauthenticated'
        }
    }

    if (results.status === 'error') {
        return (
            <>
                <h3>We've encountered an error:</h3>
                <p>{results.message}</p>
            </>
        )
    } else if (results.status === 'loading') {
            return <h3>Loading events...</h3>
    } else if (results.status === 'success') {
        if (results.results.length === 0){
            return <EmptyPage message='No events to show'/>
        }
        return (
            <ul aria-label='events list'>
                <h3>Events:</h3>
                {results.results.map((ev:PlusOneEvent) => <EventCard event={ev} key={ev.id} button={<RsvpButton status={buttonContent(ev)}/>}/>)}
            </ul>
        )
    } else {
        return <NotFoundPage/>
    }
}