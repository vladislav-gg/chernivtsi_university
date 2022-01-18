import React from 'react'
import newsStyles from '../styles/News.module.css'
import Link from 'next/link'
import Image from 'next/image'
import News_page_component from '../components/News_page_component'
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { url } from "../next.config"
import { useState } from 'react'



export default function News_section() {


  const [topics, setTopics] = useState(null);

  const getTopics = async() => {
    const res = await fetch("http://localhost:1337/api/topics?populate=%2A");
    const json = await res.json();
    setTopics(json);
    
  }

  if(!topics){
    getTopics();
  }

    return (
        <div className={newsStyles.news_wrapper}>
            <div className={newsStyles.news_header}>
                <h1>News and events</h1>
                <div>
                {topics && topics.data.map ((topic) => {

                  console.log(topic.attributes.image.data.attributes.formats.large.url)
                  return (
                    
                    <News_page_component
                      key={topic.id}
                      id={topic.id}
                      title={topic.attributes.title}
                      description={topic.attributes.description}
                      src={"http://localhost:1337" + topic.attributes.image.data.attributes.formats.large.url}
                    >
                    </News_page_component>
                    
                  )
                })}
                </div>
            </div>
        </div>
    )
};

