import type { FrontendError } from "../types/types";

export default function ErrorPage(props:FrontendError) {
    const { code,message } = props

    return (
        <>
            {code?<h2>Error: {code}</h2>:<></>}
            <p>{message}</p>
        </>
    )
}