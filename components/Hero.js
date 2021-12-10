import React from 'react'
import heroStyles from '../styles/Hero.module.css'
import Image from 'next/image'


export default function Hero() {
    return (
        <div className={heroStyles.hero_wrapper}>
            <div className={heroStyles.hero_container}>
                <div className={heroStyles.hero_text}>
                        <span className={heroStyles.span_text}>Research education</span>
                        <br/>
                    <h1 className={heroStyles.hero_heading}>
                        Education through sciense.
                    </h1>
                </div>
                <div className={heroStyles.hero_image_container}>
                    
                    <Image
                        className={heroStyles.hero_image}
                        src="/images/robot.png"
                        alt='hero_image'
                        layout='fill'
                        objectFit="cover" 

                     />
                    {/* <img className={heroStyles.hero_image} src="/images/robot.png" alt='hero_image'></img> */}
                </div>
            </div>
        </div>
    )
}

