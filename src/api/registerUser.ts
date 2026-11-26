import type { BackendError, FetchArgs, LoginDetails, UserDetails } from "../types/types";
import apiGet from "./client";


export default function registerUser(details:Required<LoginDetails>):Promise<UserDetails> {
    const fetchArgs:FetchArgs = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(
            {
                name:details.name,
                email:details.email,
                password:details.password
            }
        )
    }
    return apiGet<UserDetails>('/auth/register',fetchArgs)
}