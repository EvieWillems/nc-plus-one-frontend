import apiGet from "./client";
import type { FetchArgs, LoginDetails, UserDetails } from "../types/types";


export function getNewToken(loginDetails:LoginDetails):Promise<string> {

    const fetchArgs:FetchArgs = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(loginDetails)
    };
    
    return apiGet<string>('/auth/login',fetchArgs)
}


export async function getUserDetails(token:string):Promise<UserDetails> {

    const fetchArgs:FetchArgs = {
        headers: {Authorization: `Bearer ${token}`},
    };

    const results = apiGet<{details:UserDetails[]}>('/auth/user', fetchArgs)
    return (await results).details[0]
}