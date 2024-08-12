import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserHomePage from './DatingFrontend/Pages/UserHome/UserHomePage';
import Qualification from './DatingFrontend/Pages/Qualification/Qualification';
import LocationPage from './DatingFrontend/Pages/Location/LocationPage';
import DesignationPage from './DatingFrontend/Pages/Designation/DesignationPage';
import ViewedMyProfile from './DatingFrontend/Pages/ViewedMyProfile/ViewedMyProfile';
import MatchesPage from './DatingFrontend/Pages/Matches/MatchesPage';
import UpgradePopup from './DatingFrontend/Pages/UpgradePopup/UpgradePopup';
import NotFound404 from './DatingFrontend/Pages/NotFound404/NotFound404';
import NotFound403 from './DatingFrontend/Pages/NotFound403/NotFound403';
import SubscriptionPlan from './DatingFrontend/Pages/SubscriptionPlan/SubscriptionPlan';
import AddCards from './DatingFrontend/Pages/AddCards/AddCards';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/userhome' element={<UserHomePage/>} />
        <Route path='/qualification' element={<Qualification/>} />
        <Route path='/location' element={<LocationPage/>} />
        <Route path='/designation' element={<DesignationPage/>} />
        <Route path='/viewedwmyprofile' element={<ViewedMyProfile/>} />
        <Route path='/matches' element={<MatchesPage/>} />
        <Route path='/upgradepopup' element={<UpgradePopup/>}/>
        <Route path='/404' element={<NotFound404/>} />
        <Route path='/403' element={<NotFound403/>} />
        <Route path='/subscription' element={<SubscriptionPlan/>} />
        <Route path='/addCards' element={<AddCards/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App