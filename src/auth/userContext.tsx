import { createContext, useEffect, useState, type ReactNode } from 'react';
import type {LoginDetails, UserDetails, UserStatus} from '../types/types'
import { clearToken, readToken, writeToken } from './tokenManager';
import { getNewToken, getUserDetails } from '../api/authentication';


interface UserContextValue {
    userStatus:UserStatus;
    login: (details:LoginDetails) => Promise<void>
}

const UserContext = createContext<UserContextValue|undefined>(undefined);


export function UserProvider({children}:{children:ReactNode}) {
    
    const [userStatus,setUserStatus] = useState<UserStatus>(() => {
        if (readToken()) {
            return {status:'loading'};
        }
        return {status:'anonymous'};
    });

    useEffect(() => {
        const token = readToken();
        if (!token) return;
        getUserDetails(token)
            .then((user) => {
                setUserStatus({status:'authenticated',userDetails:user});
            })
            .catch((error) => {
                clearToken();
                setUserStatus({status:'error',message:error.message});
            });

    }, []);

    const login = async (details:LoginDetails) => {
        const token = await getNewToken(details);
        const user:UserDetails = await getUserDetails(token);
        writeToken(token);
        setUserStatus({status:'authenticated',userDetails:user});
    }

    return <UserContext value={{userStatus,login}}>
        {children}
    </UserContext>
}