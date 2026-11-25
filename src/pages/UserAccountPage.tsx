import { readToken } from "../auth/tokenManager";
import EventsList from "../components/EventsList";
import UserAccount from "../components/UserAccount";




export default function UserAccountPage() {

    const token = readToken();
    if (!token) {
        return <p>not authenticated</p>;
    } else {
        return (
            <section aria-label='account info'>
                <UserAccount/>
                <EventsList filter='rsvpd'/>
            </section>
        );
    };
}