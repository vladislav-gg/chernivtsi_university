import loginStyles from "../styles/Login.module.css";
import {
	auth,
	logInWithEmailAndPassword,
	signInWithGoogle,
	signInWithEmailAndPassword,
} from "../lib/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
	const [user, loading, error] = useAuthState(auth);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={loginStyles.login_container}>
			<Head>
				<title>Login page</title>
				<meta property="og:title" content="Login page" key="title" />
			</Head>

			<div className={loginStyles.login_wrapper}>
				<label className={loginStyles.email_label} htmlFor="email">
					Your email address
				</label>
				<input
					type="text"
					className={loginStyles.login_inputs}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email Address"
					title="Email address"
					id="email"
				/>
				<label className={loginStyles.password_label} htmlFor="password">
					Your password
				</label>
				<input
					type="password"
					className={loginStyles.login_inputs}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					title="Password"
					id="password"
				/>
				<div className={loginStyles.buttons_wrapper}>
					<button
						className={loginStyles.login_button}
						onClick={() => logInWithEmailAndPassword(email, password)}
					>
						Login
					</button>
					<button
						className={loginStyles.login_button}
						onClick={signInWithGoogle}
					>
						Login with Google
					</button>
				</div>
				<div className={loginStyles.lower_section}>
					<div className={loginStyles.forgot_passowrd}>
						<Link href="/reset">Forgot Password</Link>
					</div>
					<div className={loginStyles.register}>
						<Link href="/register">
							Don&apos;t have an account? Register now.
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
