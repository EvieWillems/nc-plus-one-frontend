import type { EventsListFilter, PlusOneEvent } from "../types/types";
import { useEventsList } from "../hooks/useEventsList";
import EventCard from "./EventCard";
import NotFoundPage from "../pages/NotFoundPage";
import EmptyPage from "../pages/EmptyPage";
import RsvpButton from './RsvpButton'



export default function EventsList (props:{filter:EventsListFilter}) {

    const results = useEventsList(props.filter)
    const usersRsvps = useEventsList('rsvpd')

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
                {
                results.results.map(
                        (ev:PlusOneEvent) =>
                        <EventCard
                            event={ev}
                            key={ev.id}
                            button={
                                usersRsvps.status==='success'?
                                <RsvpButton content={{eventId:ev.id,usersRsvps:usersRsvps.results}}/>:
                                <></>
                            }
                        />
                    )
                }
            </ul>
        )
    } else {
        return <NotFoundPage/>
    }
}