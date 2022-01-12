import React from 'react'
import newsStyles from '../styles/News.module.css'
import Link from 'next/link'
import Image from 'next/image'
import News_page_component from '../components/News_page_component'
import { fetchQuery } from '../utils'

export default function Home({ topics }) {
  return (
    <Layout title='Next Movies' description='Watch your next movies'>
      <section className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4'>
        {topics.map((topic) => (
          <TopicCard key={topic.title} topic={topic} />
        ))}
      </section>
    </Layout>
  )
}




export default function news({ topics }) {
    return (
        <div className={newsStyles.news_wrapper}>
            <div className={newsStyles.news_header}>
                <h1>News and events</h1>
                <div className={newsStyles.news_container}>
                    <div className={newsStyles.news_main}>
                        <Link href='/'>    
                            <a className={newsStyles.news_links}>
                                <div className={newsStyles.news_item}>
                                    <div className={newsStyles.image_container}>
                                        <Image 
                                            src='/images/jan.jpg' 
                                            alt='title-image' 
                                            layout='fill'
                                            objectFit="cover" 
                                            className={newsStyles.news_image}
                                        />
                                    </div>
                                    <div className={newsStyles.description_container}>
                                        <div className={newsStyles.news_tags}>
                                            <p className={newsStyles.news_date}>13 December, 03:55</p> 
                                            <p className={newsStyles.news_tag}>Basic</p>
                                        </div>
                                        <div className={newsStyles.h3_styles}>I published my website on vercel today. So here is my news section and some dummy text to test container width.</div>
                                        <p className={newsStyles.p_styles}> The NHS is urging everyone eligible to get vaccinated against Coronavirus, in light of the new Omicron variant which is spreading rapidly in London.

                                        You can book your first, second or booster dose of the vaccine online at on the NHS website now or call 119, free of charge. 
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
};


export async function getServerSideProps() {
    const topics = await fetchQuery('topics')
    return {
      props: {
        topics
      }
    }
}  