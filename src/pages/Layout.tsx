import { NavLink, Outlet } from 'react-router'


export default function Layout() {
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
            <NavLink to='/user/login'>
                <div>log in/sign up</div>
            </NavLink>
            <main>
                <Outlet/>
            </main>
        </>
    )
}