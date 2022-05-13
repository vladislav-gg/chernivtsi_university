import React from "react";
import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<div className={footerStyles.footer_wrapper}>
			<div className={footerStyles.footer_container}>
				<div className={footerStyles.footer_left}>
					<div className={footerStyles.first_column}>
						<div className={footerStyles.first_container}>
							<Link href="mailto:office@chnu.edu.ua">office@chnu.edu.ua</Link>
						</div>
					</div>
					<div className={footerStyles.small_containers}>
						<div className={footerStyles.second_column}>
							<div className={footerStyles.second_container}>
								<p className={footerStyles.p_title}>Main campus</p>
								<p className={footerStyles.p_description}>
									58012, Ukraine, Chernivtsi, 2, Kotsiubynsky str.
								</p>
								<p className={footerStyles.p_description}>
									<Link href="tel:+380372584856">+380 372 58-48-56</Link>
								</p>
							</div>
						</div>
						<div className={footerStyles.third_column}>
							<div className={footerStyles.third_container}>
								<p className={footerStyles.p_title}>International office</p>
								<p className={footerStyles.p_description}>
									58012, Ukraine, Chernivtsi, 2, Kotsiubynsky str.
								</p>
								<p className={footerStyles.p_description}>
									<Link href="tel:+380372584856">+380 372 58-48-56</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={footerStyles.fourth_column}>
					<Link href="https://www.instagram.com/chnu_official/?igshid=1x3rden3j0jd5&fbclid=IwAR0NyXpoCBKlD5kTBxQXuw-6W5wPUZ2kHyk5C9GLOcADcPBRgHtEsgwtQ-g">
						<a className={footerStyles.links}>Instagram</a>
					</Link>
					<Link href="https://www.facebook.com/chnu.edu.ua/?ref=settings">
						<a className={footerStyles.links}>Facebook</a>
					</Link>
					<Link href="https://www.youtube.com/channel/UCYCdlIZeC5aYLWMFEiu2i3w?view_as=subscriber">
						<a className={footerStyles.links}>Youtube</a>
					</Link>
					<Link href="https://t.me/ChNUSiteNews">
						<a className={footerStyles.links}>Telegram</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
