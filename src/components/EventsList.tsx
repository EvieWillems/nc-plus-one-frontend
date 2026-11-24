import type { EventsListFilter, PlusOneEvent } from "../types/types";
import { useEventsList } from "../hooks/useEventsList";
import EventCard from "./EventCard";
import NotFoundPage from "../pages/NotFoundPage";

export default function EventsList (props:{filter:EventsListFilter}) {

    const results = useEventsList(props.filter)

    if (results.status === 'error') {
        return (
            <>
                <h3>We've encountered an error:</h3>
                <p>{results.message}</p>
            </>
        )
    } else if (results.status === 'loading') {
            <h3>Loading events...</h3>
    } else if (results.status === 'success') {
        return (
            <ul aria-label='events list'>
                <h3>Events:</h3>
                {results.results.map((ev:PlusOneEvent) => <EventCard event={ev}/>)}
            </ul>
        )
    } else {
        return <NotFoundPage/>
    }
}