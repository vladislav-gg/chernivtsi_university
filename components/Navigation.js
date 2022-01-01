import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import navStyles from '../styles/Navigation.module.css'
import Link from 'next/link'
import Burger from './Burger'
import { useState } from 'react'
import burgerStyle from '../styles/Burger.module.css'
import { motion } from "framer-motion"




export default function Navigation() {
    const variants = {
        hidden: { opacity: 0, x: 0, y: -200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    
    const [ burgerOpen, setBurgerOpen ] = useState(false)
    const  toggleBurger = () =>{
        setBurgerOpen(!burgerOpen)
    }



    return (
        <motion.div 
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={{
                type: 'linear',
                duration: 1.4
                }}            

        className={navStyles.nav_wrapper}>
            <div className={navStyles.nav_links_container}>
                    <div className={navStyles.nav_links}>
                        <Link href='/admissions'>
                            <a className={navStyles.nav_links_1}>Admissions</a>
                        </Link>
                        <Link href='/research'>
                            <a className={navStyles.nav_links_1}>Research</a>
                        </Link>
                        <Link href='/news'>
                            <a className={navStyles.nav_links_1}>News & Events</a>
                        </Link>
                        <Link href='/about'>
                            <a className={navStyles.nav_links_1}>About</a>
                        </Link>
                    </div>
                </div>
                <div className={navStyles.burger_container}>
                    <div className={navStyles.burger_toggle}>
                        <div className='burger' onClick={toggleBurger}>
                            <Burger/>
                        </div>
                        <div className={navStyles.nav_links_container_mobile}>
                                <div className={navStyles.nav_links_mobile} style={{display:burgerOpen ? 'flex' : 'none'}}>
                                    <Link href='/admissions'>
                                        <a className={navStyles.nav_links_1_mobile}>Admissions</a>
                                    </Link>
                                    <Link href='/research'>
                                        <a className={navStyles.nav_links_1_mobile}>Research</a>
                                    </Link>
                                    <Link href='/news'>
                                        <a className={navStyles.nav_links_1_mobile}>News & Events</a>
                                    </Link>
                                    <Link href='/about'>
                                        <a className={navStyles.nav_links_1_mobile}>About</a>
                                    </Link>
                                </div>
                            </div>
                    <div>
                    </div>
                </div>
                <Link href='/'>
                    <a>
                        <div className={navStyles.logo}>
                            <div id={navStyles.first_word}>Chernivtsi</div>
                            <div id={navStyles.second_word}>University</div> 
                        </div>
                    </a>
                </Link>
            </div>
        </motion.div>
    )
}
