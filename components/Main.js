import React from "react";
import mainStyles from "../styles/Main.module.css";
import Link from "next/link";

export default function Main() {
	return (
		<div className={mainStyles.main_wrapper}>
			{/* NEWS SECTION IS HERE */}
			<div className={mainStyles.main_container}>
				<h1>News</h1>
				<div className={mainStyles.main_content}>
					<div className={mainStyles.main_news}>
						<Link href="/news/science">
							<a>
								<div className={mainStyles.main_card_container}>
									<div className={mainStyles.main_image_background}>
										<img
											className={mainStyles.main_image1}
											src="/images/1st_image.webp"
										></img>
									</div>
									<div className={mainStyles.main_content_container}>
										<h2 className={mainStyles.h2_text}>
											IKEA Foundation pledges £4.5m to back Oxford sustainable
											finance action
										</h2>
										<p className={mainStyles.p_text}>23 November 2021</p>
									</div>
								</div>
							</a>
						</Link>
						<Link href="/news/science">
							<a>
								<div className={mainStyles.main_card_container_2}>
									<div className={mainStyles.main_image_background}>
										<img
											className={mainStyles.main_image1}
											src="/images/lecture.webp"
										></img>
									</div>
									<div className={mainStyles.main_content_container}>
										<h2 className={mainStyles.h2_text}>
											IKEA Foundation pledges £4.5m to back Oxford sustainable
											finance action
										</h2>
										<p className={mainStyles.p_text}>23 November 2021</p>
									</div>
								</div>
							</a>
						</Link>

						<Link href="/news/science">
							<a>
								<div className={mainStyles.main_card_container_4}>
									<div className={mainStyles.main_image_background}>
										<img
											className={mainStyles.main_image1}
											src="/images/library.webp"
										></img>
									</div>
									<div className={mainStyles.main_content_container}>
										<h2 className={mainStyles.h2_text}>
											IKEA Foundation pledges £4.5m to back Oxford sustainable
											finance action
										</h2>
										<p className={mainStyles.p_text}>23 November 2021</p>
									</div>
								</div>
							</a>
						</Link>

						<Link href="/news/science">
							<a>
								<div className={mainStyles.main_card_container_3}>
									<div className={mainStyles.main_image_background}>
										<img
											className={mainStyles.main_image1}
											src="/images/kid.webp"
										></img>
									</div>
									<div className={mainStyles.main_content_container}>
										<h2 className={mainStyles.h2_text}>
											IKEA Foundation pledges £4.5m to back Oxford sustainable
											finance action
										</h2>
										<p className={mainStyles.p_text}>23 November 2021</p>
									</div>
								</div>
							</a>
						</Link>

						<Link href="/news/science">
							<a>
								<div className={mainStyles.main_card_container_3}>
									<div className={mainStyles.main_image_background}>
										<img
											className={mainStyles.main_image1}
											src="/images/adm5.webp"
										></img>
									</div>
									<div className={mainStyles.main_content_container}>
										<h2 className={mainStyles.h2_text}>
											IKEA Foundation pledges £4.5m to back Oxford sustainable
											finance action
										</h2>
										<p className={mainStyles.p_text}>23 November 2021</p>
									</div>
								</div>
							</a>
						</Link>
					</div>
					{/* END OF NEWS SECTION*/}

					{/* START OF EVENTS SIDE BAR  */}
					<div className={mainStyles.events_wrapper}>
						<div className={mainStyles.events_heading}>
							<h1>Events</h1>
						</div>
						<div className={mainStyles.events_container}>
							<Link href="/">
								<a className={mainStyles.event_item}>
									<div className={mainStyles.event_date}>
										24 November, 17:24
									</div>
									<p className={mainStyles.events_text}>
										International partnerships advance knowledge, but
										universities must be alert to risks, says Professor Stephen
										J Toope.
									</p>
								</a>
							</Link>
							<Link href="/">
								<a className={mainStyles.event_item}>
									<div className={mainStyles.event_date}>
										24 November, 17:24
									</div>
									<p className={mainStyles.events_text}>
										International partnerships advance knowledge, but
										universities must be alert to risks, says Professor Stephen
										J Toope.
									</p>
								</a>
							</Link>
							<Link href="/">
								<a className={mainStyles.event_item}>
									<div className={mainStyles.event_date}>
										24 November, 17:24
									</div>
									<p className={mainStyles.events_text}>
										International partnerships advance knowledge, but
										universities must be alert to risks, says Professor Stephen
										J Toope.
									</p>
								</a>
							</Link>
							<Link href="/">
								<a className={mainStyles.event_item}>
									<div className={mainStyles.event_date}>
										24 November, 17:24
									</div>
									<p className={mainStyles.events_text}>
										International partnerships advance knowledge, but
										universities must be alert to risks, says Professor Stephen
										J Toope.
									</p>
								</a>
							</Link>
							<div className={mainStyles.more_events}>
								<Link href="/">
									<a>
										<h2>Show all events &#8594;</h2>
									</a>
								</Link>
							</div>
						</div>
					</div>
					{/* END OF EVENTS SIDE BAR */}
				</div>
				<div className={mainStyles.more_news}>
					<Link href="/">
						<a>
							<h2>Show all news &#8594;</h2>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
