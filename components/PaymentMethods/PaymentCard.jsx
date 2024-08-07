import React, { useState } from 'react'
import style from "./PaymentCard.module.css"
useState

const PaymentCard = () => {
    const [clicked,setClicked] = useState(false)
  return (
    <div className={`${style.container} ${clicked?style.clicked:""}`} onClick={()=>setClicked(prev=>!prev)}>
        <img src="./mastercard.png" alt="card" className={style.image}/>
        <div className={style.text}>
            <h1>*********455</h1>
            <span>Expires 06/5</span>
        </div>
    </div>
  )
}

export default PaymentCard