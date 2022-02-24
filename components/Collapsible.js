import React from "react";
import majorStyles from "../styles/Majors.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/dist/client/image";
import { useState } from "react";
import { data } from "./data";
import Button from "./Button";

export default function Collapsible(props) {
	const [isShowing, setIsShowing] = useState(false);

	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: "-10%", transition: 0.5 },
	};

	const toggle = () => {
		setIsShowing(!isShowing);
	};

	return (
		<div className={majorStyles.major_names}>
			<div className={majorStyles.major_item} onClick={toggle} type="button">
				<div className={majorStyles.major}>
					<div className={majorStyles.major_number}>{props.id}</div>
					<div className={majorStyles.major_title}>{props.name}</div>
				</div>
				<a className={majorStyles.major_button}>
					{isShowing ? (
						<Image
							width="40px"
							height="40px"
							src="https://img.icons8.com/ios-glyphs/40/000000/collapse-arrow.png"
						/>
					) : (
						<Image
							width="40px"
							height="40px"
							src="https://img.icons8.com/ios-glyphs/40/000000/expand-arrow--v1.png"
						/>
					)}
				</a>
			</div>
			<motion.div
				className={majorStyles.major_active_container}
				style={{ display: isShowing ? "block" : "none" }}
				animate={isShowing ? "open" : "closed"}
				variants={variants}
				transition={{ duration: 0.7 }}
			>
				<div className={majorStyles.major_block_container}>
					<div className={majorStyles.major_desciprtion_container}>
						<div className={majorStyles.major_desciprtion}>
							<p>{props.description}</p>
						</div>
						<Button href={props.href} />
					</div>

					<div className={majorStyles.major_image_container}>
						<Image
							id={props.id}
							className={majorStyles.major_image}
							src={props.image}
							objectFit="cover"
							layout="fill"
							alt=""
						></Image>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
