import React from 'react'
import scienceStyles from '../../styles/Science_news.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function science() {
    return (
        <div className={scienceStyles.wrapper}>
            <div className={scienceStyles.contaier}>
                <div className={scienceStyles.image_container}>
                    <Image 
                        src='/images/frutiger.jpeg'
                        className={scienceStyles.image}
                        layout='fill'
                        objectFit="cover" 
                        >
                        
                    </Image>
                </div>
            </div>
        </div>
    )
}
