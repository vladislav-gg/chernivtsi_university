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
                            <a className={newsStyles.news_links}>
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
                                    <div className={newsStyles.description_container}>
                                        <div className={newsStyles.news_tags}>
                                            <p className={newsStyles.news_date}>13 December, 03:55</p> 
                                            <p className={newsStyles.news_tag}>Basic</p>
                                        </div>
                                        <div className={newsStyles.h3_styles}>I published my website on vercel today. So here it my news section and some dummy text to test container width.</div>
                                        <p className={newsStyles.p_styles}> The NHS is urging everyone eligible to get vaccinated against Coronavirus, in light of the new Omicron variant which is spreading rapidly in London.

                                        You can book your first, second or booster dose of the vaccine online at on the NHS website now or call 119, free of charge. 
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className={newsStyles.news_hover}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
