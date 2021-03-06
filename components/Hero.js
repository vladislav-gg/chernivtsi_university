import React from "react";
import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export default function Hero() {
	return (
		<div className={heroStyles.hero_wrapper}>
			<Swiper pagination={{ dynamicBullets: true }} className="mySwiper">
				<SwiperSlide className={heroStyles.hero_swiper}>
					<div className={heroStyles.hero_container}>
						<div className={heroStyles.hero_text}>
							<span className={heroStyles.span_text}>Research education</span>
							<br />
							<h1 className={heroStyles.hero_heading}>
								Education through sciense.
							</h1>
						</div>
						<div className={heroStyles.hero_image_container}>
							<Image
								className={heroStyles.hero_image}
								src="/images/robot.png"
								alt=""
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={heroStyles.hero_swiper}>
					<div className={heroStyles.hero_container}>
						<div className={heroStyles.hero_text}>
							<span className={heroStyles.span_text}>Experience the art</span>
							<br />
							<h1 className={heroStyles.hero_heading}>Education through VR.</h1>
						</div>
						<div className={heroStyles.hero_image_container}>
							<Image
								className={heroStyles.hero_image}
								src="/images/unviersity_hero2.webp"
								alt=""
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
