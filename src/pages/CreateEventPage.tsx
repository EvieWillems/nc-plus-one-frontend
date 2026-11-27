import { useState, type ChangeEvent, type FormEvent } from "react";
import type { PlusOneEvent } from "../types/types";
import { createNewEvent } from "../api/events";
import { readToken } from "../auth/tokenManager";
import CreateEventForm from "../components/CreateEventForm";



export type Field = 'title'|'description'|'location'|'starts_at'|'ends_at'

export interface FormEventDetails extends Omit<PlusOneEvent,'id'> {
    description:string
}

const emptyDetails = {
    title:'',
    description:'',
    starts_at:'',
    ends_at:'',
    location:''
}

export default function CreateEventPage() {

    const [eventFormValues,setEventFormValues] = useState<FormEventDetails>(emptyDetails)
    
    const changeHandler = (field:Field) => {
        return (
            (event:ChangeEvent<HTMLInputElement>) => {
                setEventFormValues({...eventFormValues,[field]:event.target.value})
            }
        )
    }

    const submissionHandler = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = readToken()
        if (token) {
            createNewEvent(eventFormValues,token);
        } else {
            throw new Error('user not authenticated')
        };
    }

    const formProps = {
        details:eventFormValues,
        changeHandler:changeHandler,
        submissionHandler:submissionHandler
    };

    return <CreateEventForm formProps={formProps}/>
}