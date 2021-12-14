import React from 'react'
import newsStyles from '../styles/News.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function news() {
    return (
        <div className={newsStyles.news_wrapper}>
            <div className={newsStyles.news_header}>
                <h1>News and events</h1>
                <div className={newsStyles.news_container}>
                    <div className={newsStyles.news_main}>
                        <Link href='/'>    
                            <div className={newsStyles.news_item}>
                                <div className={newsStyles.image_container}>
                                    <Image 
                                        src='/images/jan.jpg' 
                                        alt='title-image' 
                                        layout='fill'
                                        objectFit="cover" 
                                        className={newsStyles.news_image}
                                    />
                                </div>
                                <div className={newsStyles.description_contaier}>
                                    <div className={newsStyles.news_tags}>
                                        <p className={newsStyles.news_date}>13 December, 03:55</p> 
                                        <p className={newsStyles.news_tag}>Basic</p>
                                    </div>
                                    <h3>I published my website on vercel today.</h3>
                                    <p>The description of this particulare news.</p>


                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
