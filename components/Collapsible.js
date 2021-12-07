import React from 'react'
import majorStyles from '../styles/Majors.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/dist/client/image'
import { useState } from "react";
import { data } from './data'

export default function Collapsible(image, description, id) {
    const [isShowing, setIsShowing] = useState(false);

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-50%", transition:0.5},
      }
      
    const toggle = () => {
      setIsShowing(!isShowing);
    };

    return (
        <div className={majorStyles.major_names} onClick={toggle} type='button' >
        <div className={majorStyles.major_item}>
            <div className={majorStyles.major}>
                <div className={majorStyles.major_number}>01</div>    
                <div className={majorStyles.major_title}>Digital world and artificial</div>
            </div>
               
            <a className={majorStyles.major_button}>Click me to expand</a>
            
        </div>
            <motion.div className={majorStyles.major_active_container} style={{display: isShowing ? 'block' : 'none', padding: '5px'}} animate={isShowing ? 'open' : 'closed'} variants={variants} transition={{duration: 0.7 }}>
                <div className={majorStyles.major_block_container}>
                    <div className={majorStyles.major_desciprtion}>
                        <p>{description} </p>
                    </div>
                    <div className={majorStyles.major_button_container}>
                        <button className={majorStyles.major_button}>Click me</button>
                    </div>
                    <div className={majorStyles.major_image_container}>    
                        <Image 
                            id={id}
                            className={majorStyles.major_image} 
                            src={image}
                            objectFit='cover'
                            layout='fill'
                        >
                        </Image>
                    </div>
                </div>    
            </motion.div>
    </div>

    )
}
