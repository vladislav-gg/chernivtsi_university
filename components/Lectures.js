import React from 'react'
import lectureStyles from '../styles/Lectures.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Lectures() {
    const [ref, inView] = useInView();

    
    const variants = {
        hidden: { opacity: 0, x: 0, y: -200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

   
    return (
        <motion.div 
            variants={variants}
            initial='hidden'
            whileInView="visible"
            viewport={{ once: true }}
            animate='enter'
            exit='exit'
            transition={{
                type: 'linear',
                duration: 1.4
                }}            
className={lectureStyles.lecture_wrapper}>
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
                            <Link href='/news/science'>
                                <a>
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
                                </a> 
                            </Link> 
                            <div className={lectureStyles.lecture_description}>
                                <div className={lectureStyles.lecture_tags}>
                                    <div className={lectureStyles.tag}>Registration required</div>
                                    <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                </div>
                                <Link href='/news/science'>
                                    <a className={lectureStyles.lecture_title_p}>
                                        <div className={lectureStyles.lecture_title}>
                                            <a className={lectureStyles.styled_title}>Emil Ruder. Typography.</a>
                                        </div>
                                        <div className={lectureStyles.p_container}>
                                            <p className={lectureStyles.styled_p}>After twenty-five years of teaching, Ruder published a heavily illustrated book capturing his ideas, methods and approach. The book, Typographie: A Manual for Design.

                                            </p>
                                        </div>
                                    </a>
                                </Link>
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
                                <div className={lectureStyles.lecture_date_digit}>05</div>
                                <div className={lectureStyles.lecture_more_date}>
                                    <div className={lectureStyles.lecture_monty}>December 2021</div>
                                    <div className={lectureStyles.lecture_day}>Sat</div>
                                </div>
                            </div>  
                            <Link href='/news/science'>
                                <a>
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
                                </a>
                            </Link>
                            <div className={lectureStyles.lecture_description}>
                                    <div className={lectureStyles.lecture_tags}>
                                        <div className={lectureStyles.tag}>Registration required</div>
                                        <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                    </div>
                            <Link href='/news/science'>
                                <a className={lectureStyles.lecture_title_p}>
                                    <div className={lectureStyles.lecture_title}>
                                        <a className={lectureStyles.styled_title}>Jan Tschichold & The new Typography</a>
                                    </div>
                                    <div className={lectureStyles.p_container}>
                                        <p className={lectureStyles.styled_p}>In 1928, the year he turned 26, the German-born calligrapher and typographer Jan Tschichold (1902-74) published his landmark book Die Neue Typographie (The New Typography).
                                        </p>
                                    </div>
                                </a>
                            </Link>
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
                                <div className={lectureStyles.lecture_date_digit}>07</div>
                                <div className={lectureStyles.lecture_more_date}>
                                    <div className={lectureStyles.lecture_monty}>December 2021</div>
                                    <div className={lectureStyles.lecture_day}>Mon</div>
                                </div>
                            </div>  
                            <Link href='/news/science'>
                                <a>
                                    <div className={lectureStyles.lecture_image}>
                                        <Image
                                            src='/images/frutiger.jpeg' 
                                            alt='title-image' 
                                            layout='fill'
                                            objectFit="cover" 
                                            className={lectureStyles.image}
                                        ></Image>

                                        {/* <img className={lectureStyles.image} src='/images/emil_ruder.jpg'></img> */}
                                    </div>  
                                </a>
                            </Link>
                            <div className={lectureStyles.lecture_description}>
                                <div className={lectureStyles.lecture_tags}>
                                    <div className={lectureStyles.tag}>Registration required</div>
                                    <div className={lectureStyles.tag}>Must be enrolled in design class</div>
                                </div>
                                <Link href='/news/science'>
                                     <a className={lectureStyles.lecture_title_p}>
                                        <div className={lectureStyles.lecture_title}>
                                            <a className={lectureStyles.styled_title}>Adrian Frutiger - Typefaces.</a>
                                        </div>
                                        <div className={lectureStyles.p_container}>
                                            <p className={lectureStyles.styled_p}>The international creation of typefaces after 1950 was decisively influenced by the Swiss type designer Adrian Frutiger. His Univers typeface and the machine-readable font OCR-B, which was adopted as an ISO standard, are milestones, as is his type for the Paris airports, which set new standards for signage types and evolved into the Frutiger typeface.
                                            </p>
                                        </div>
                                    </a>
                                </Link>
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
        </motion.div>
    )
}
