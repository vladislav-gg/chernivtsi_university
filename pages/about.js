import React from 'react'
import aboutStyles from '../styles/About_page.module.css'
import Link from 'next/link'


export default function about() {
    return (
        <div className={aboutStyles.about_page_wrapper}>
            <div className={aboutStyles.about_page_container}>
            
                <div className={aboutStyles.paragraph_wrapper}>
                    <p>Here is the description of this project. I created a website for my hometown <u><Link href='http://www.chnu.edu.ua/index.php?page=ua'>University</Link></u>. The project is build with Next.js. For the first time Ive used <em>map</em> function to loop through an array of objects which generated 5 separate components with different content (Majors component). I also want to add a registration form and connect it to a database for some unknown purpose. This is going to be my final project, after its completion I will start actively looking for a job as a front-end developer.</p>    
                </div>
             </div>        
    
        </div>
    
    )
}
