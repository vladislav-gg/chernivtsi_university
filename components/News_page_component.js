import React from "react";
import newsStyles from "../styles/News.module.css";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { url } from "../next.config";

export default function News_page_component(props) {
	console.log(props.src);
	return (
		<div>
			<div className={newsStyles.news_main}>
				<Link href="/">
					<a className={newsStyles.news_links}>
						<div className={newsStyles.news_item}>
							<div className={newsStyles.image_container}>
								<Image
									src={props.src}
									id={props.id}
									alt="title-image"
									layout="fill"
									objectFit="cover"
									className={newsStyles.news_image}
									priority={true}
								/>
							</div>
							<div className={newsStyles.description_container}>
								<div className={newsStyles.news_tags}>
									<p className={newsStyles.news_date}>13 December, 03:55</p>
									<p className={newsStyles.news_tag}>Basic</p>
								</div>
								<div className={newsStyles.h3_styles}>{props.title}</div>
								<p className={newsStyles.p_styles}> {props.description}</p>
							</div>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
}
