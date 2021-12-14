import React from 'react'
import  { useState } from 'react';
import burgerStyles from '../styles/Burger.module.css'


export default function Burger() {
    const [open, setOpen] = useState(false)

    
    return (
        <div className={burgerStyles.burger_container}>
            <div className={burgerStyles.burger_wrapper}>
                <div className={burgerStyles.burgers}></div>
                <div className={burgerStyles.burgers}></div>
                <div className={burgerStyles.burgers}></div>
            </div>  
        </div>
    )
}
