import React from 'react'
import buttonStyles from '../styles/Button.module.css'
import Link from 'next/link'

export default function Button() {
    return (
        <div>
            <Link href="/news/science"><span className={buttonStyles.button}><a></a></span>
            </Link>
        </div>
    )
}
