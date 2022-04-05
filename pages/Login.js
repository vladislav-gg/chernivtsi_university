import loginStyles from "../styles/Login.module.css";
import {
	auth,
	signInWithEmailAndPassword,
	signInWithGoogle,
} from "../lib/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function login() {
	const [user, loading, error] = useAuthState(auth);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={loginStyles.login_container}>
			<div className={loginStyles.login_wrapper}>
				<input
					type="text"
					className={loginStyles.login_inputs}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className={loginStyles.login_inputs}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<div className={loginStyles.buttons_wrapper}>
					<button
						className={loginStyles.login_button}
						onClick={() => signInWithEmailAndPassword(email, password)}
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
						<Link href="/register">Don't have an account? Register now.</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
