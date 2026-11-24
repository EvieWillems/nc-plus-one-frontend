import { useEffect, useState } from 'react';
import type { EventsListFilter, PageStatus, PlusOneEvent } from '../types/types'
import { getEventsList } from '../api/events';


type ListStatus = PageStatus<PlusOneEvent[]>

export function useEventsList(filter:EventsListFilter):ListStatus {

    const [eventsListState, setEventsListState] = useState<ListStatus>({status:'loading'})

    useEffect( () => {
        const loadEventsList = async (filter:EventsListFilter) => {
            try {
                const response = await getEventsList(filter);
                if (response) {setEventsListState({status:'success',results:response.events})};
            } catch (err) {
                if (err instanceof Error) {
                    setEventsListState({status:'error',message:'unable to load events'});
                };
            };
        };
        loadEventsList(filter);}, []
    );

    return eventsListState
    
}