import EventsList from '../components/EventsList'
import type { EventsListFilter } from '../../types/types'




export default function EventsListPage(props:{filter:EventsListFilter}) {
    return <EventsList filter={props.filter}/>
};