import apiGet from "./client";
import type { FetchArgs, LoginDetails, UserDetails } from "../types/types";

const apiUrl = import.meta.env.VITE_API_URL

export function getNewToken(loginDetails:LoginDetails):Promise<string> {

    const fetchArgs:FetchArgs = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({loginDetails})
    };
    
    return apiGet<string>(apiUrl+'/auth/login',fetchArgs)
}


export async function getUserDetails(token:string):Promise<UserDetails> {

    const fetchArgs:FetchArgs = {
        method:'GET',
        headers: {'Content-Type':'application/json'},
        body: token
    };

    return apiGet<UserDetails>(apiUrl+'/auth/user', fetchArgs)
}