import React from 'react'
import majorStyles from '../styles/Majors.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/dist/client/image'
import { useState } from "react";
import Collapsible from './Collapsible'
import { data } from './data'


export default function Majors() {
    return (
        <div className={majorStyles.major_wrapper}>
            <div className={majorStyles.major_container}>
                <div className={majorStyles.major_heading}>
                    <h1>Majors</h1>
                </div>
                {
                data.map(major => {
                    console.log(major.href)

                    return (
                    <Collapsible
                        key={major.id.toString()}
                        id={major.id}
                        description={major.description}
                        image={major.image}
                        name={major.name}
                        href={major.href}
                    />
                )})}
            </div>
        </div>
    )
}


