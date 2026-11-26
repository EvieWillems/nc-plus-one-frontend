import {Routes, Route} from 'react-router'
import Layout from './pages/Layout'
import EventsListPage from './pages/EventsListPage';
import LandingPage from './pages/LandingPage';
import SingleEventPage from './pages/SingleEventPage';
import UserAccount from './components/UserAccount';
import LoginSignupPage from './pages/LoginSignupPage';
import { useUser } from './auth/userContext';

export default function AppRoutes() {
    const {userStatus} = useUser()
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path='events' element={<EventsListPage filter={'all'}/>}/>
                <Route path='events/:eventId' element={<SingleEventPage/>}/>
                <Route path='user/account' element={userStatus.status==='authenticated'?<UserAccount/>:<></>}/>
                <Route path='user/login' element={<LoginSignupPage/>}/>
            </Route>
        </Routes>
    );
}