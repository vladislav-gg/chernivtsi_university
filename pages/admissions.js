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
                        Our admissions process this year is expected to run to the usual timeline with any changes due to COVID-19 highlighted in our applicant guide. If you are a current applicant, make sure you stay up to date by reading the Admissions News section to the right of this page. 
                        </p>
                        <p>
                        Our next Open Days will be taking place on 29 and 30 June, and 16 September 2022 and we look forward to seeing you then. It is not currently known exactly what form these will take and whether they will be online or in-person but more information will be available as soon as possible. </p>
                    </div>
                    <div className={admissionStyles.news_main}>
                        <Link href='/'>    
                            <a className={admissionStyles.news_links}>
                                <div className={admissionStyles.news_item}>
                                    <div className={admissionStyles.image_container}>
                                        <Image 
                                            src='/images/adm5.webp' 
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
                                        <p className={admissionStyles.p_styles}> Find information about our Undergraduate and professional schools here.
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
                                            src='/images/adm2.jpg' 
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
                                            src='/images/adm3.jpg' 
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
                                            src='/images/adm4.jpg' 
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
