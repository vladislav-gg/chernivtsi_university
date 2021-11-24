import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import navStyles from '../styles/Navigation.module.css'


export default function Navigation() {
    return (
        <div className={navStyles.nav_wrapper}>
            <div className={navStyles.nav_links_container}>
                <div className={navStyles.nav_links}>
                    <a href='/' className={navStyles.nav_links_1}>Admissions</a>
                    <a href='/' className={navStyles.nav_links_1}>Research</a>
                    <a href='/' className={navStyles.nav_links_1}>News & Events</a>
                    <a href='/' className={navStyles.nav_links_1}>About</a>
                </div>
                <div >
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                </div>
            </div>
        </div>
    )
}
