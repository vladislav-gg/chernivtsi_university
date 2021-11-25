import React from 'react'
import mainStyles from '../styles/Main.module.css'


export default function Main() {
    return (
        <div className={mainStyles.main_wrapper}>
        {/* NEWS SECTION IS HERE */}
            <div className={mainStyles.main_container}>
                    <h1>News</h1>
                <div className={mainStyles.main_content}>
                    <div className={mainStyles.main_news}>
                        <div className={mainStyles.main_card_container}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/1st_image.jpeg'></img>
                            </div>
                                <div className={mainStyles.main_content_container}>
                                    <h2 className={mainStyles.h2_text}>
                                        IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                    </h2>
                                    <p className={mainStyles.p_text}>23 November 2021</p>
                                </div>
                        </div>
                        <div className={mainStyles.main_card_container_2}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/lecture.jpg'></img>
                            </div>
                            <div className={mainStyles.main_content_container}>
                                <h2 className={mainStyles.h2_text}>
                                    IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                </h2>
                                <p className={mainStyles.p_text}>23 November 2021</p>
                            </div>
                        </div>


                        <div className={mainStyles.main_card_container_3}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/library.jpg'></img>
                            </div>
                            <div className={mainStyles.main_content_container}>
                                <h2 className={mainStyles.h2_text}>
                                    IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                </h2>
                                <p className={mainStyles.p_text}>23 November 2021</p>
                            </div>
                        </div>
                        <div className={mainStyles.main_card_container_3}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/kid.jpg'></img>
                            </div>
                            <div className={mainStyles.main_content_container}>
                                <h2 className={mainStyles.h2_text}>
                                    IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                </h2>
                                <p className={mainStyles.p_text}>23 November 2021</p>
                            </div>
                        </div>
                        <div className={mainStyles.main_card_container_3}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/library2.jpg'></img>
                            </div>
                            <div className={mainStyles.main_content_container}>
                                <h2 className={mainStyles.h2_text}>
                                    IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                </h2>
                                <p className={mainStyles.p_text}>23 November 2021</p>
                            </div>
                        </div>
                    </div>
                    {/* END OF NEWS SECTION*/}

                    {/* START OF EVENTS SIDE BAR  */}
                        <div className={mainStyles.events_wrapper}>
                            <div className={mainStyles.events_heading}>
                                <h1>Events</h1>
                            </div>
                            <div className={mainStyles.events_container}>
                                <a href='/' className={mainStyles.event_item}>
                                    <div className={mainStyles.event_date}>
                                        24 November, 17:24
                                    </div>
                                    <p className={mainStyles.events_text}>International partnerships advance knowledge, but universities must be alert to risks, says Professor Stephen J Toope.
                                    </p>
                                </a>
                                <a href='/' className={mainStyles.event_item}>
                                    <div className={mainStyles.event_date}>
                                        24 November, 17:24
                                    </div>
                                    <p className={mainStyles.events_text}>International partnerships advance knowledge, but universities must be alert to risks, says Professor Stephen J Toope.
                                    </p>
                                </a>
                                <a href='/' className={mainStyles.event_item}>
                                    <div className={mainStyles.event_date}>
                                        24 November, 17:24
                                    </div>
                                    <p className={mainStyles.events_text}>International partnerships advance knowledge, but universities must be alert to risks, says Professor Stephen J Toope.
                                    </p>
                                </a>
                                <a href='/' className={mainStyles.event_item}>
                                    <div className={mainStyles.event_date}>
                                        24 November, 17:24
                                    </div>
                                    <p className={mainStyles.events_text}>International partnerships advance knowledge, but universities must be alert to risks, says Professor Stephen J Toope.
                                    </p>
                                </a>
                                <div className={mainStyles.more_events}>
                                    <a href='/'>
                                        <h2>Show all events &#8594;</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* END OF EVENTS SIDE BAR */}
                </div>
                        <div className={mainStyles.more_news}>
                            <a href='/'>
                                <h2>Show all news &#8594;</h2>
                            </a>
                        </div>
            </div>    
        </div>
    )
}
