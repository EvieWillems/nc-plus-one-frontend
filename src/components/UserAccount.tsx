import { useUser } from "../auth/userContext";
import useUserAccount from "../hooks/useUserAccount";
import { parseTime } from "../utils/parseTime";
import EventsList from "./EventsList";


export default function UserAccount() {
    
    const accountState = useUserAccount()
    const {logout} = useUser()

    if (accountState.status === 'success') {
        const {name,email,created_at} = accountState.results

        return (
            <>
                <h2>My account:</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Joined: {parseTime(created_at).readableDate}</p>
                <h2>My events:</h2>
                <EventsList filter='rsvpd'/>
                <button type='button' aria-label='log out' onClick={logout}>Log out</button>
            </>
        )
    }
}