import React from 'react'
import aboutStyles from '../styles/About_page.module.css'
import Link from 'next/link'


export default function about() {
    return (
        <div className={aboutStyles.about_page_wrapper}>
            <div className={aboutStyles.about_page_container}>
            
            <div className={aboutStyles.paragraph_wrapper}>
                        <p>I created a website for my hometown <u><Link href='http://www.chnu.edu.ua/index.php?page=ua'>University</Link></u>. I had this idea for a project about 5 years ago, when I started getting into web design and typography. At that time I was drawing websites in Photoshop and they were pretty mediocre, but I still liked the process and learned a lot. The project is built with Nextjs. For the first time I&apos;ve fetched data from a custom database (data.js) and used <em>map</em> function to loop through an array of objects which generated 5 separate components with different content (Majors component). I have also used Strapi as headless CMS and fetched data from it&apos;s API at <u><Link href='/news'>news</Link></u> page.</p>    
                </div>   
             </div>        
    
        </div>
    
    )
}
