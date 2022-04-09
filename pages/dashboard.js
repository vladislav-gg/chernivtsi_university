import dashboardStyles from "../styles/Dashboard.module.css";
import { auth, db, logout } from "../lib/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Dashboard() {
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
			alert("An error occured while fetching user data");
		}
	};
	useEffect(() => {
		if (loading) return;
		if (!user) return router.push("/");

		fetchUserName();
	}, [user, loading]);

	return (
		<div className={dashboardStyles.dash_wrapper}>
			<div className={dashboardStyles.dash_container}>
				Logged in as
				<div>{name}</div>
				<div>{user?.email}</div>
				<button className={dashboardStyles.button} onClick={logout}>
					Logout
				</button>
			</div>
		</div>
	);
}
