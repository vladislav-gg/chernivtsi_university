import registerStyles from "../styles/Register.module.css";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithGoogle,
} from "../lib/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Register() {
	const router = useRouter();
	const [user, loading, error] = useAuthState(auth);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const signUp = () => {
		if (!name) alert("Please enter your name");
		registerWithEmailAndPassword(name, email, password);
	};
	useEffect(() => {
		if (loading) return;
		if (user) router.push("/");
	}, [user, loading]);

	return (
		<div className={registerStyles.login_container}>
			<Head>
				<title>Register page</title>
				<meta property="og:title" content="Register page" key="title" />
			</Head>
			<div className={registerStyles.login_wrapper}>
				<label className={registerStyles.fullname_label} htmlFor="full name">
					Your full name
				</label>

				<input
					type="text"
					className={registerStyles.login_inputs}
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name"
					title="Full name"
					id="full name"
				/>
				<label className={registerStyles.email_label} htmlFor="email address">
					Your email address
				</label>
				<input
					type="text"
					className={registerStyles.login_inputs}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
					title="email address"
					id="email address"
				/>
				<label className={registerStyles.password_label} htmlFor="password">
					Your password
				</label>
				<input
					type="password"
					className={registerStyles.login_inputs}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					title="Password"
					id="password"
				/>
				<div className={registerStyles.buttons_wrapper}>
					<button className={registerStyles.login_button} onClick={signUp}>
						Register
					</button>
					<button
						className={registerStyles.login_button}
						onClick={signInWithGoogle}
					>
						Login with Google
					</button>
				</div>
				<div className={registerStyles.lower_section}>
					<div className={registerStyles.register}>
						<Link href="/Login">Already have an account? Go to login.</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
