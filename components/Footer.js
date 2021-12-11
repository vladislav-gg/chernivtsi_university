import React from 'react'
import footerStyles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={footerStyles.footer_wrapper}>
            <div className={footerStyles.footer_container}>
                <div className={footerStyles.first_column}>
                    <div className={footerStyles.first_container}>
                        <Link href='mailto:office@chnu.edu.ua'>office@chnu.edu.ua</Link>
                    </div>
                </div>
                <div className={footerStyles.small_containers}>
                    <div className={footerStyles.second_column}>
                        <div className={footerStyles.second_container}>
                            <p className={footerStyles.p_title}>Main campus</p>
                            <p className={footerStyles.p_description}>58012, Ukraine, Chernivtsi, 2, Kotsiubynsky str.</p>
                            <p className={footerStyles.p_description}><Link href='tel:+380372584856'>+380 372 58-48-56</Link></p>
                        </div>

                    </div>
                    <div className={footerStyles.third_column}>
                        <div className={footerStyles.third_container}>
                            <p className={footerStyles.p_title}>International office</p>
                            <p className={footerStyles.p_description}>58012, Ukraine, Chernivtsi, 2, Kotsiubynsky str.</p>
                            <p className={footerStyles.p_description}><Link href='tel:+380372584856'>+380 372 58-48-56</Link></p>
                        </div>
                    </div>
                </div>
                <div className={footerStyles.fourth_column}>
                    <Link href='/'>Instagram</Link>
                    <Link href='/'>Facebook</Link>
                    <Link href='/'>Vkontakte</Link>
                    <Link href='/'>Twiiter</Link>
                </div>
                
            </div>
            
        </div>
    )
}
