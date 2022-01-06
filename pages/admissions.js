import React from 'react'
import admissionStyles from '../styles/Admissions.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function admissions() {
    return (
        <div className={admissionStyles.wrapper}>
            <div className={admissionStyles.container}>
                <div className={admissionStyles.title}>
                    <div>Admissions</div>
                </div>
                <div className={admissionStyles.left_container}>
                    <div className={admissionStyles.p_container}>
                        <p>
                        You can earn undergraduate degrees at Yale College, master’s or doctoral degrees at the Graduate School of Arts & Sciences, and specialized degrees at our 12 professional schools. There are also many non-degree programs that allow individuals to study or pursue research without matriculating. Apply directly to the school or program where you wish to enroll.
                        </p>
                        <p>
                        Yale is committed to ensuring that qualified students are admitted without regard to their financial circumstances, and that they graduate without excessive debt.</p>
                    </div>
                    <div className={admissionStyles.news_main}>
                        <Link href='/'>    
                            <a className={admissionStyles.news_links}>
                                <div className={admissionStyles.news_item}>
                                    <div className={admissionStyles.image_container}>
                                        <Image 
                                            src='/images/jan.jpg' 
                                            alt='title-image' 
                                            layout='fill'
                                            objectFit="cover" 
                                            className={admissionStyles.news_image}
                                        />
                                    </div>
                                    <div className={admissionStyles.description_container}>
                                        {/* <div className={admissionStyles.news_tags}>
                                            <p className={admissionStyles.news_date}>13 December, 03:55</p> 
                                            <p className={admissionStyles.news_tag}>Basic</p>
                                        </div> */}
                                        <div className={admissionStyles.h3_styles}>Undergraduate</div>
                                        <p className={admissionStyles.p_styles}> Visit admissions.yale.edu for information about Yale College and advice for applicants. 
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={admissionStyles.news_main}>
                        <Link href='/'>    
                            <a className={admissionStyles.news_links}>
                                <div className={admissionStyles.news_item}>
                                    <div className={admissionStyles.image_container}>
                                        <Image 
                                            src='/images/jan.jpg' 
                                            alt='title-image' 
                                            layout='fill'
                                            objectFit="cover" 
                                            className={admissionStyles.news_image}
                                        />
                                    </div>
                                    <div className={admissionStyles.description_container}>
                                        {/* <div className={admissionStyles.news_tags}>
                                            <p className={admissionStyles.news_date}>13 December, 03:55</p> 
                                            <p className={admissionStyles.news_tag}>Basic</p>
                                        </div> */}
                                        <div className={admissionStyles.h3_styles}>Graduate & Professional Schools</div>
                                        <p className={admissionStyles.p_styles}> Find information about our graduate and professional schools here.


                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={admissionStyles.news_main}>
                        <Link href='/'>    
                            <a className={admissionStyles.news_links}>
                                <div className={admissionStyles.news_item}>
                                    <div className={admissionStyles.image_container}>
                                        <Image 
                                            src='/images/jan.jpg' 
                                            alt='title-image' 
                                            layout='fill'
                                            objectFit="cover" 
                                            className={admissionStyles.news_image}
                                        />
                                    </div>
                                    <div className={admissionStyles.description_container}>
                                        {/* <div className={admissionStyles.news_tags}>
                                            <p className={admissionStyles.news_date}>13 December, 03:55</p> 
                                            <p className={admissionStyles.news_tag}>Basic</p>
                                        </div> */}
                                        <div className={admissionStyles.h3_styles}>Financial Aid</div>
                                        <p className={admissionStyles.p_styles}> We work to ensure that all qualified applicants have access to a Yale education.

 
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={admissionStyles.news_main}>
                        <Link href='/'>    
                            <a className={admissionStyles.news_links}>
                                <div className={admissionStyles.news_item}>
                                    <div className={admissionStyles.image_container}>
                                        <Image 
                                            src='/images/jan.jpg' 
                                            alt='title-image' 
                                            layout='fill'
                                            objectFit="cover" 
                                            className={admissionStyles.news_image}
                                        />
                                    </div>
                                    <div className={admissionStyles.description_container}>
                                        {/* <div className={admissionStyles.news_tags}>
                                            <p className={admissionStyles.news_date}>13 December, 03:55</p> 
                                            <p className={admissionStyles.news_tag}>Basic</p>
                                        </div> */}
                                        <div className={admissionStyles.h3_styles}>International Students</div>
                                        <p className={admissionStyles.p_styles}> We offer financial aid to international students on the same terms as U.S. students.


                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>            
        </div>
    )
}
