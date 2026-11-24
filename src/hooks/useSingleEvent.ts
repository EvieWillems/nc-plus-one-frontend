import { useEffect, useState } from 'react';
import type { EventFullDetail, PageStatus } from '../types/types'
import { getSingleEvent } from '../api/events';


type SingleEventStatus = PageStatus<EventFullDetail>

export function useSingleEvent(id:number):SingleEventStatus {

    const [singleEventState, setSingleEventState] = useState<SingleEventStatus>({status:'loading'})

    useEffect( () => {
        const loadSingleEvent = async () => {
            try {
                const response = await getSingleEvent(id);
                if (response) {setSingleEventState({status:'success',results:response.event[0]})};
            } catch (err) {
                if (err instanceof Error) {
                    setSingleEventState({status:'error',message:'unable to load event'});
                };
            };        
        };
        loadSingleEvent();}, []
    );

    return singleEventState
    
}