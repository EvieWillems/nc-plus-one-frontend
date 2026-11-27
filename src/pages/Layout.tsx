import { NavLink, Outlet } from 'react-router'
import { useUser } from '../auth/userContext';


export default function Layout() {
    const user = useUser()
    return(
        <>
            <NavLink to='/'>
                <h1>NC Plus One</h1>
            </NavLink>
            <NavLink to='/events'>
                <div>Events</div>
            </NavLink>
            <NavLink to='/user/account'>
                <div>My events</div>
            </NavLink>
            {user.userStatus.status!=='authenticated'&&<NavLink to='/user/login'>
                <div>log in/sign up</div>
            </NavLink>}
            <main>
                <Outlet/>
            </main>
        </>
    )
}