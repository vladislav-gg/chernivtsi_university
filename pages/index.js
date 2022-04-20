import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Majors from "../components/Majors";
import Lectures from "../components/Lectures";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Chernivtsi University</title>
				<meta name="description" content="Chernivtsi University website" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<main>
				<Hero />
				<Main />
				<Lectures />
				<Majors />
				<About />
			</main>
		</div>
	);
}
