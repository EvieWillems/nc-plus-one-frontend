import { useEffect, useState } from "react";
import type { PageStatus, UserDetails } from "../types/types";
import { getUserDetails } from "../api/authentication";
import { readToken } from "../auth/tokenManager";


type AccountPageStatus = PageStatus<UserDetails>


export default function useUserAccount() {
    
    const [AccountState, setAccountState] = useState<AccountPageStatus>({status:'loading'})


    useEffect( () => {
        const loadUserDetails = async () => {
            const token = await readToken()
            if (!token) {
                throw new Error('unauthorised')
            } else {
                try {
                    const response = await getUserDetails(token);
                    if (response) {setAccountState({status:'success',results:response})};
                } catch (err) {
                    if (err instanceof Error) {
                        setAccountState({status:'error',message:'unable to load user profile'});
                    };
                };   
            };     
        };
        loadUserDetails();}, []
    );

    return AccountState
}


