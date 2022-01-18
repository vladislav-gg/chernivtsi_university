import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import { motion } from "framer-motion"


export default function Layout({children}) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: -200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    
    return (
        <motion.main
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={{
                type: 'linear',
                duration: 1.1
                }}            
            >
            <Navigation/>
                <div>{children}</div>
            <Footer/>    
        </motion.main>
    )
}
