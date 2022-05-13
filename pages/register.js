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
				<title>Login page</title>
				<meta property="og:title" content="Login page" key="title" />
			</Head>
			<div className={registerStyles.login_wrapper}>
				<input
					type="text"
					className={registerStyles.login_inputs}
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name"
					aria-labelledby="Full name"
				/>
				<input
					type="text"
					className={registerStyles.login_inputs}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
					aria-labelledby="email address"
				/>
				<input
					type="password"
					className={registerStyles.login_inputs}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					aria-labelledby="Password"
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
