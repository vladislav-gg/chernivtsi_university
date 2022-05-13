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
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
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
