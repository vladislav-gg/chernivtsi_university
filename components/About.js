import React from "react";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
	return (
		<div className={aboutStyles.about_wrapper}>
			<div className={aboutStyles.about_container}>
				{/* <div className={aboutStyles.about_university}>
                    <p>About University</p>
                </div> */}
				<div className={aboutStyles.right_container}>
					<div className={aboutStyles.h3_wrapper}>
						<h3>Chernivtsi National University</h3>
					</div>
					<div className={aboutStyles.paragraph_wrapper}>
						<div className={aboutStyles.paragraph_wrapper}>
							<p>
								I developed a website for my hometown{" "}
								<u>
									<Link href="http://www.chnu.edu.ua/index.php?page=ua">
										University
									</Link>
								</u>
								. I had this idea for a project about 5 years ago, when I
								started getting into web design and typography. At that time I
								was drawing websites in Photoshop and they were pretty mediocre,
								but I still liked the process and learned a lot.
								<p>
									The project is built with Nextjs. For the first time I&apos;ve
									fetched data from a custom database (data.js) and used{" "}
									<em>map</em> function to loop through an array of objects
									which generated 5 separate components with different content
									(Majors component). I have also used Strapi as headless CMS
									and fetched data from it&apos;s API at{" "}
									<u>
										<Link href="/news">news</Link>
									</u>{" "}
									page. The website also has firebase authentication and I'm
									planning on adding dashboard for each signed-in user and some
									additional features (like submitting homework and calendar for
									incoming classes).
								</p>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
