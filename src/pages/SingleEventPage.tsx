import { useParams } from "react-router";
import SingleEvent from "../components/SingleEvent";


export default function SingleEventPage () {
    const {eventId} = useParams()
    console.log(eventId)
    if (eventId === undefined) return
    return <SingleEvent id={Number(eventId)}/>;
}