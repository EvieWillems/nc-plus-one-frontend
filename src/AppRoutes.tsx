import {Routes, Route} from 'react-router'
import Layout from './pages/Layout'
import EventsListPage from './pages/EventsListPage';
import LandingPage from './pages/LandingPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path='events' element={<EventsListPage filter={'all'}/>}/>
            </Route>
        </Routes>
    );
}