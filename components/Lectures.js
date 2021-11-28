import React from 'react'
import lectureStyles from '../styles/Lectures.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'

export default function Lectures() {
    return (
        <div className={lectureStyles.lecture_wrapper}>
            <div className={lectureStyles.lecture_container}>
                <div className={lectureStyles.lecture_heading}>
                    <h1>Next lectures</h1>
                </div>
                <div className={lectureStyles.lecture_names}>
                    <div className={lectureStyles.lecture_item}>
                        <div className={lectureStyles.lecture_info}>
                            <div className={lectureStyles.lecture_date}>
                                <div className={lectureStyles.lecture_date_digit}>01</div>
                                <div className={lectureStyles.lecture_more_date}>
                                    <div className={lectureStyles.lecture_monty}>December 2021</div>
                                    <div className={lectureStyles.lecture_day}>Wednesday</div>
                                </div>
                            </div>  

                            <div className={lectureStyles.lecture_image}>
                                <img src='/images/1st_image.jpeg'></img>
                            </div>  
                            <div className={lectureStyles.lecture_description}>
                                <div className={lectureStyles.lecture_tags}>
                                    <div className={lectureStyles.tag}>Registration required</div>
                                    <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                </div>
                                <div className={lectureStyles.lecture_title}>
                                    <Link href='/'><a className={lectureStyles.styled_title}>Emil Ruder and art of typography</a></Link>
                                </div>
                            </div>
                            <div className={lectureStyles.lecture_add_info}>
                                <div className={lectureStyles.lecture_info_1}>
                                    <div className={lectureStyles.lecture_time_gmt}>Starts at 19:00</div>
                                    <div className={lectureStyles.lecture_address}>Address: Shevchenko street 13B, building 3, room 5.11</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={lectureStyles.lecture_start}>



                    </div>
                </div>
                
            </div>
        </div>
    )
}
