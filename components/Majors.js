import React from 'react'
import majorStyles from '../styles/Majors.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/dist/client/image'
import { useState } from "react";


export default function Majors() {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
      setIsShowing(!isShowing);
    };
    return (
        <div className={majorStyles.major_wrapper}>
            <div className={majorStyles.major_container}>
                <div className={majorStyles.major_heading}>
                    <h1>Majors</h1>
                </div>
                <div className={majorStyles.major_names} onClick={toggle} type='button' >
                    <div className={majorStyles.major_item}>
                        <div className={majorStyles.major}>
                            <div className={majorStyles.major_number}>01</div>    
                            <div className={majorStyles.major_title}>Digital world and artificial</div>
                        </div>
                        <Link href='/'>    
                            <a className={majorStyles.major_button}>Click me to expand</a>
                        </Link>
                    </div>
                        <motion.div className={majorStyles.major_active_container} style={{display: isShowing ? 'block' : 'none', padding: '5px'}} transition={{delay: 1}}>
                            <div className={majorStyles.major_block_container}>
                                <div className={majorStyles.major_desciprtion}>
                                    <p>The descriptive results show that most of the disciplines involved in AIEd papers come from Computer Science and STEM, and that quantitative methods were the most frequently used in empirical studies. </p>
                                </div>
                                <div className={majorStyles.major_button_container}>
                                    <button className={majorStyles.major_button}></button>
                                </div>
                                <div className={majorStyles.major_image_container}>    
                                    <Image 
                                        className={majorStyles.major_image} 
                                        src='/images/ai.png'
                                        objectFit='cover'
                                        layout='fill'
                                    >
                                    </Image>
                                </div>
                            </div>    
                        </motion.div>

                </div>
                
            </div>
        </div>
    )
}
