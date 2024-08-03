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
      </Routes>
    </BrowserRouter>
  )
}

export default App