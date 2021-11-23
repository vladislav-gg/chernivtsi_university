import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import navStyles from '../styles/Navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className={navStyles.nav_wrapper}>
            <div className={navStyles.nav_links_container}>
                <div className={navStyles.nav_links}>
                <Link href='/' className={navStyles.nav_links_1}>
                    Admissions
                </Link>  
                <Link href='/' className={navStyles.nav_links_1}>
                    Research
                </Link>
                <Link href='/' className={navStyles.nav_links_1}>
                    News & Events
                </Link>
                <Link href='/' className={navStyles.nav_links_1}>
                    About
                </Link>
                </div>
                <div >
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                </div>
            </div>
        </div>
    )
}
