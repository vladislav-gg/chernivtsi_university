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
                    <Link href='/'><a className={lectureStyles.all_lectures}>All lectures</a></Link>
                </div>
                <div className={lectureStyles.lecture_names}>
                    <div className={lectureStyles.lecture_item}>
                        {/* first card */}
                        <div className={lectureStyles.lecture_info}>
                            <div className={lectureStyles.lecture_date}>
                                <div className={lectureStyles.lecture_date_digit}>01</div>
                                <div className={lectureStyles.lecture_more_date}>
                                    <div className={lectureStyles.lecture_monty}>December 2021</div>
                                    <div className={lectureStyles.lecture_day}>Wed</div>
                                </div>
                            </div>  

                            <div className={lectureStyles.lecture_image}>
                                <Image
                                    src='/images/ruder_book.jpg' 
                                    alt='title-image' 
                                    layout='fill'
                                    objectFit="cover" 
                                    className={lectureStyles.image}
                                 ></Image>

                                {/* <img className={lectureStyles.image} src='/images/emil_ruder.jpg'></img> */}
                            </div>  
                            <div className={lectureStyles.lecture_description}>
                                <div className={lectureStyles.lecture_tags}>
                                    <div className={lectureStyles.tag}>Registration required</div>
                                    <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                </div>
                                <div className={lectureStyles.lecture_title}>
                                    <Link href='/'><a className={lectureStyles.styled_title}>Emil Ruder. Typography.</a></Link>
                                </div>
                                <div className={lectureStyles.p_container}>
                                    <Link href='/'><p className={lectureStyles.styled_p}>After twenty-five years of teaching, Ruder published a heavily illustrated book capturing his ideas, methods and approach. The book, Typographie: A Manual for Design.

                                    </p>
                                    </Link>
                                </div>
                            </div>
                            <div className={lectureStyles.lecture_add_info}>
                                <div className={lectureStyles.lecture_info_1}>
                                    <div className={lectureStyles.lecture_time_gmt}>Starts at 19:00</div>
                                    <div className={lectureStyles.lecture_address}>Address: Shevchenko street 13B, building 3, room 5.11</div>
                                </div>
                            </div>
                        </div>
                        {/* second card */}
                        <div className={lectureStyles.lecture_info}>
                            <div className={lectureStyles.lecture_date}>
                                <div className={lectureStyles.lecture_date_digit}>01</div>
                                <div className={lectureStyles.lecture_more_date}>
                                    <div className={lectureStyles.lecture_monty}>December 2021</div>
                                    <div className={lectureStyles.lecture_day}>Wed</div>
                                </div>
                            </div>  

                            <div className={lectureStyles.lecture_image}>
                                <Image
                                    src='/images/jan.jpg' 
                                    alt='title-image' 
                                    layout='fill'
                                    objectFit="cover" 
                                    className={lectureStyles.image}
                                 ></Image>

                                {/* <img className={lectureStyles.image} src='/images/emil_ruder.jpg'></img> */}
                            </div>  
                            <div className={lectureStyles.lecture_description}>
                                <div className={lectureStyles.lecture_tags}>
                                    <div className={lectureStyles.tag}>Registration required</div>
                                    <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                </div>
                                <div className={lectureStyles.lecture_title}>
                                    <Link href='/'><a className={lectureStyles.styled_title}>Jan Tschichold & The new Typography</a></Link>
                                </div>
                                <div className={lectureStyles.p_container}>
                                    <Link href='/'><p className={lectureStyles.styled_p}>In 1928, the year he turned 26, the German-born calligrapher and typographer Jan Tschichold (1902-74) published his landmark book Die Neue Typographie (The New Typography).

                                    </p>
                                    </Link>
                                </div>
                            </div>
                            <div className={lectureStyles.lecture_add_info}>
                                <div className={lectureStyles.lecture_info_1}>
                                    <div className={lectureStyles.lecture_time_gmt}>Starts at 19:00</div>
                                    <div className={lectureStyles.lecture_address}>Address: Shevchenko street 13B, building 3, room 5.11</div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd card */}
                        <div className={lectureStyles.lecture_info}>
                            <div className={lectureStyles.lecture_date}>
                                <div className={lectureStyles.lecture_date_digit}>01</div>
                                <div className={lectureStyles.lecture_more_date}>
                                    <div className={lectureStyles.lecture_monty}>December 2021</div>
                                    <div className={lectureStyles.lecture_day}>Wed</div>
                                </div>
                            </div>  

                            <div className={lectureStyles.lecture_image}>
                                <Image
                                    src='/images/ruder_book.jpg' 
                                    alt='title-image' 
                                    layout='fill'
                                    objectFit="cover" 
                                    className={lectureStyles.image}
                                 ></Image>

                                {/* <img className={lectureStyles.image} src='/images/emil_ruder.jpg'></img> */}
                            </div>  
                            <div className={lectureStyles.lecture_description}>
                                <div className={lectureStyles.lecture_tags}>
                                    <div className={lectureStyles.tag}>Registration required</div>
                                    <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                </div>
                                <div className={lectureStyles.lecture_title}>
                                    <Link href='/'><a className={lectureStyles.styled_title}>Emil Ruder. Typography.</a></Link>
                                </div>
                                <div className={lectureStyles.p_container}>
                                    <Link href='/'><p className={lectureStyles.styled_p}>After twenty-five years of teaching, Ruder published a heavily illustrated book capturing his ideas, methods and approach. The book, Typographie: A Manual for Design.

                                    </p>
                                    </Link>
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
