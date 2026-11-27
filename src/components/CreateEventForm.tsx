import type { ChangeEventHandler, SubmitEventHandler } from "react";
import type { Field, FormEventDetails } from "../pages/CreateEventPage";




export interface EventFormProps {
    details:FormEventDetails
    changeHandler:(field:Field)=>ChangeEventHandler;
    submissionHandler:SubmitEventHandler<HTMLFormElement>;
}

export default function CreateEventForm(props:{formProps:EventFormProps}) {

    const {details,changeHandler,submissionHandler} = props.formProps
    const {title,description,location,starts_at,ends_at} = details

    return (
        <form aria-label='create event form' onSubmit={submissionHandler}>
            <label htmlFor='title' className="h3">Event title:</label>
            <input id='title' value={title} onChange={changeHandler('title')}></input>
            <label htmlFor='description' className="h3">Description:</label>
            <input id='description' value={description} onChange={changeHandler('description')}></input>
            <label htmlFor='location' className="h3">Venue:</label>
            <input id='location' value={location} onChange={changeHandler('location')}></input>
            <label htmlFor='start' className="h3">Starts at:</label>
            <input id='start' value={starts_at} onChange={changeHandler('starts_at')}></input>
            <label htmlFor='end' className="h3">Ends at:</label>
            <input id='end' value={ends_at} onChange={changeHandler('ends_at')}></input>
            <button type='submit'>Create event</button>
        </form>
    )
}