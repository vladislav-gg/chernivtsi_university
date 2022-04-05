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

export default function register() {
	const [user, loading, error] = useAuthState(auth);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const register = () => {
		if (!name) alert("Please enter your name");
		registerWithEmailAndPassword(email, name, password);
	};
	return (
		<div className={registerStyles.login_container}>
			<div className={registerStyles.login_wrapper}>
				<input
					type="text"
					className={registerStyles.login_inputs}
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name"
				/>
				<input
					type="text"
					className={registerStyles.login_inputs}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className={registerStyles.login_inputs}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<div className={registerStyles.buttons_wrapper}>
					<button
						className={registerStyles.login_button}
						onClick={() => register}
					>
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
