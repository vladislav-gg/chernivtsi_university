import React from 'react'
import majorStyles from '../styles/Majors.module.css'
import Link from 'next/link'



export default function Majors() {
    return (
        <div className={majorStyles.major_wrapper}>
            <div className={majorStyles.major_container}>
                <div className={majorStyles.major_heading}>
                    <h1>Majors</h1>
                </div>
                <div className={majorStyles.major_names}>
                    <div className={majorStyles.major_item}>
                        <div className={majorStyles.major}>
                            <div className={majorStyles.major_number}>01</div>    
                            <div className={majorStyles.major_title}>Digital world and artificial</div>
                        </div>
                        <Link href='/'>    
                            <a className={majorStyles.major_button}>Click me to expand</a>
                        </Link>
                    </div>
                        <div className={majorStyles.major_hover_image}>
                            <img className={majorStyles.major_image} src='/images/1st_image.jpeg'></img>
                        </div>

                </div>
                
            </div>
        </div>
    )
}
