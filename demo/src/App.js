import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import BottomNavbar from "./Components/BottomNavbar/BottomNavbar";
import Received from "./Pages/Received/Received";
import Accepted from "./Pages/Accepted/Accepted";
import Rejected from "./Pages/Rejected/Rejected";
import Shortlisted from "./Pages/Shortlisted/Shortlisted";
import "./App.css";
import Sent from "./Pages/Sent/Sent";
import Contacted from "./Pages/Contacted/Contacted";
import ShortlistedBy from "./Pages/ShortlistedBy/ShortlistedBy";
import Messages from "./Pages/Messages/Messages";
import RightSideModal from "./Components/RightSideModal/RightSideModal";
import ViewedMyProfile from "./Pages/ViewedMyProfile/ViewedMyProfile";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageName, setPageName] = useState("Page name");

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handlePageNameChange = (name) => {
        setPageName(name);
        setIsModalOpen(false);
    };


    return (
        <Router>
            <Header pageName={pageName} toggleModal={toggleModal} />
            <RightSideModal isOpen={isModalOpen} onClose={toggleModal} onPageNameChange={handlePageNameChange} />
            <Routes className="content">
                <Route path="/sent" element={<Sent />} />
                <Route path="/viewed-my-profile" element={<ViewedMyProfile />} />
                <Route path="/accepted" element={<Accepted />} />
                <Route path="/rejected" element={<Rejected />} />
                <Route path="/received" element={<Received />} />
                <Route path="/shortlisted" element={<Shortlisted />} />
                <Route path="/contacted" element={<Contacted />} />
                <Route path="/shortlistedBy" element={<ShortlistedBy />} />
                <Route path="/messages" element={<Messages />} />
            </Routes>
            <BottomNavbar pageName={pageName}/>
        </Router>
    );
};

export default App;
