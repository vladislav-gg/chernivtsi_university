import React from "react";
import newsStyles from "../styles/News.module.css";
import Link from "next/link";
import Image from "next/image";
import News_page_component from "../components/News_page_component";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { url } from "../next.config";
import { useState } from "react";
import useSWR from "swr";
import loaderStyles from "../styles/Loderr.module.css";
import { motion } from "framer-motion";

export default function News_section() {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const URL = "http://localhost:1337";
	const herokuURL = "https://chernivtsiuniversity.herokuapp.com";
	// const [topics, setTopics] = useState(null);
	// const getTopics = async () => {
	// 	const res = await fetch(herokuURL + "/api/topics?populate=%2A");
	// 	const json = await res.json();
	// 	setTopics(json);
	// };

	// if (!topics) {
	// 	getTopics();
	// }
	const { data, error } = useSWR(
		herokuURL + "/api/topics?populate=%2A",
		fetcher
	);

	if (error) {
		return (
			<div className={loaderStyles.news_error}>
				<h1>Failed to load.</h1>
			</div>
		);
	}
	if (!data)
		return (
			<div className={loaderStyles.news_loading}>
				<h1>Loading...</h1>
			</div>
		);

	return (
		<div className={newsStyles.news_wrapper}>
			<div className={newsStyles.news_header}>
				<h1>News and events</h1>
				<div>
					{data &&
						data.data.map((topic) => {
							return (
								<News_page_component
									key={topic.id}
									id={topic.id}
									title={topic.attributes.title}
									description={topic.attributes.description}
									src={topic.attributes.image.data.attributes.url}
								></News_page_component>
							);
						})}
				</div>
			</div>
		</div>
	);
}
