import Head from "next/head";
import Image from "next/image";
import navStyles from "../styles/Navigation.module.css";
import navdashStyles from "../styles/Nav_dashboard.module.css";
import Link from "next/link";
import Burger from "./Burger";
import { useState, useRef } from "react";
import burgerStyle from "../styles/Burger.module.css";
import { motion } from "framer-motion";
import { auth, db, logout } from "../lib/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useRouter } from "next/router";
import buttonStyles from "../styles/Nav_button.module.css";

export default function Navigation() {
	const [dashboard, setDashboard] = useState(false);
	const btnRef = useRef();
	const toggleDashboard = () => {
		setDashboard(!dashboard);
	};

	const router = useRouter();
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		if (loading) return;
		if (!user) return router.push("/");

		fetchUserName();
	}, [user, loading]);

	const variants = {
		hidden: { opacity: 0, x: 0, y: -200 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

	const [burgerOpen, setBurgerOpen] = useState(false);
	const toggleBurger = () => {
		setBurgerOpen(!burgerOpen);
	};

	useEffect(() => {
		const closeDashboard = (e) => {
			if (e.path[0] !== btnRef.current) {
				setDashboard(false);
			}
		};

		document.body.addEventListener("click", closeDashboard);

		return () => document.body.removeEventListener("click", closeDashboard);
	}, []);

	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={{
				type: "linear",
				duration: 1.4,
			}}
			className={navStyles.nav_wrapper}
		>
			<div className={navStyles.nav_links_container}>
				<div className={navStyles.nav_links}>
					<Link href="/admissions">
						<a className={navStyles.nav_links_1}>Admissions</a>
					</Link>
					<Link href="/news">
						<a className={navStyles.nav_links_1}>News & Events</a>
					</Link>
					<Link href="/about">
						<a className={navStyles.nav_links_1}>About</a>
					</Link>
					{user && (
						<div className={navdashStyles.profile_name}>
							<div
								className={navStyles.nav_links_1}
								onClick={toggleDashboard}
								ref={btnRef}
								aria-label="profile"
								aria-expanded={dashboard ? "true" : "false"}
							>
								{name}
							</div>
							<div
								className={navdashStyles.dashboard_toggle}
								style={{ display: dashboard ? "block" : "none" }}
								aria-haspopup="true"
								aria-hidden={isShowing ? "false" : "true"}
							>
								<Link href="/dashboard">
									<a className={navdashStyles.dashboard_links}>Dashboard</a>
								</Link>
								<Link href="/Login">
									<a className={navdashStyles.dashboard_links}>Homework</a>
								</Link>
								<Link href="/">
									<a className={navdashStyles.dashboard_links} onClick={logout}>
										Sign out
									</a>
								</Link>
							</div>
						</div>
					)}

					{!user && (
						<>
							<Link href="/Login">
								<a className={navStyles.nav_links_1}>Login</a>
							</Link>

							<Link href="/register">
								<a className={navStyles.nav_links_1}>Register</a>
							</Link>
						</>
					)}
				</div>
			</div>
			<div className={navStyles.burger_container}>
				<div className={navStyles.burger_toggle}>
					<div className="burger" onClick={toggleBurger}>
						<Burger />
					</div>
					<div className={navStyles.nav_links_container_mobile}>
						<div
							className={navStyles.nav_links_mobile}
							style={{ display: burgerOpen ? "flex" : "none" }}
						>
							<Link href="/admissions">
								<a className={navStyles.nav_links_1_mobile}>Admissions</a>
							</Link>
							<Link href="/news">
								<a className={navStyles.nav_links_1_mobile}>News & Events</a>
							</Link>
							<Link href="/about">
								<a className={navStyles.nav_links_1_mobile}>About</a>
							</Link>
						</div>
					</div>
					<div></div>
				</div>
				<Link href="/">
					<a>
						<div className={navStyles.logo}>
							<div id={navStyles.first_word}>Chernivtsi</div>
							<div id={navStyles.second_word}>University</div>
						</div>
					</a>
				</Link>
			</div>
		</motion.div>
	);
}
