import loginStyles from "../styles/Login.module.css";
import {
	auth,
	signInWithEmailAndPassword,
	signInWithGoogle,
	sendPasswordResetEmail,
} from "../lib/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function reset() {
	const [user, loading, error] = useAuthState(auth);
	const [email, setEmail] = useState("");

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

				<div className={loginStyles.buttons_wrapper}>
					<button
						className={loginStyles.login_button}
						onClick={() => sendPasswordResetEmail(email)}
					>
						Reset password
					</button>
					<button
						className={loginStyles.login_button}
						onClick={signInWithGoogle}
					>
						Login with Google
					</button>
				</div>
				<div className={loginStyles.lower_section}>
					<div className={loginStyles.register}>
						<Link href="/register">Don't have an account? Register now.</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
