import { useSingleEvent } from "../hooks/useSingleEvent";


export default function SingleEvent(props:{id:number}) {

    const result = useSingleEvent(props.id)

    if (result.status === 'success') {
        console.log(result.results.title)
        return (
            <p>
              {result.results.title}  
            </p>
            )
    } else
        return <p>error</p>
    
}