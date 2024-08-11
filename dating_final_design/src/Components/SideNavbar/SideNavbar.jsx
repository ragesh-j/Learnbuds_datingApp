import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/accepted" activeClassName="active">Accepted</NavLink>
          </li>
          <li>
            <NavLink to="/rejected" activeClassName="active">Rejected</NavLink>
          </li>
          <li>
            <NavLink to="/shortlisted" activeClassName="active">Shortlisted</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;
