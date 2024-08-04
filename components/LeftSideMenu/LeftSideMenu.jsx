import React from 'react'
import "./LeftSideMenu.css"
import { IoMdCloseCircleOutline } from "react-icons/io";
const LeftSideMenu = () => {
  return (
    <section className='left-men-cont'>
        <ul className='nav-body-cont'>
            <button className='left-cls-btn'><IoMdCloseCircleOutline/></button>
            <li className='nav-list'>Matrimony</li>
            <li className='nav-list'>Dating</li>
            <li className='nav-list'>E commerce</li>
            <li className='nav-list'>Study abroad</li>
            <li className='nav-list'>Job portal</li>
        </ul>
    </section>
  )
}

export default LeftSideMenu