import React from 'react'
import mainStyles from '../styles/Main.module.css'


export default function Main() {
    return (
        <div className={mainStyles.main_wrapper}>
            <div className={mainStyles.main_container}>
                <div className={mainStyles.main_content}>
                    <h1>News</h1>
                    <div className={mainStyles.main_news}>
                        <div className={mainStyles.main_card_container}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/1st_image.jpeg'></img>
                                <div className={mainStyles.main_content_container}>
                                    <h2 className={mainStyles.h2_text}>
                                        IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                    </h2>
                                    <p className={mainStyles.p_text}>23 November 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className={mainStyles.main_card_container_2}>
                            <div className={mainStyles.main_image_background}>
                                <img className={mainStyles.main_image1} src='/images/chernivtsi-university3.jpg'></img>
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
                                <img className={mainStyles.main_image1} src='/images/chernivtsi-university3.jpg'></img>
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
                                <img className={mainStyles.main_image1} src='/images/chernivtsi-university3.jpg'></img>
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
                                <img className={mainStyles.main_image1} src='/images/chernivtsi-university3.jpg'></img>
                            </div>
                            <div className={mainStyles.main_content_container}>
                                <h2 className={mainStyles.h2_text}>
                                    IKEA Foundation pledges £4.5m to back Oxford sustainable finance action
                                </h2>
                                <p className={mainStyles.p_text}>23 November 2021</p>
                            </div>
                        </div>
                    </div>
                        <div className={mainStyles.events_container}>
                            <h1>Events</h1>
                        </div>



                </div>
            </div>    
        </div>
    )
}
