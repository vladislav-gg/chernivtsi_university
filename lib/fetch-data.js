import React from "react";
import useSWR from "swr";

// export async function fetchDataStrapi() {
// 	// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// 	// const URL = "http://localhost:1337";
// 	// const herokuURL = "https://chernivtsiuniversity.herokuapp.com";

// 	// const { data, error } = useSWR(
// 	// 	herokuURL + "/api/topics?populate=%2A",
// 	// 	fetcher
// 	// );
// 	const res = await fetch(herokuURL + "/api/topics?populate=%2A");
// 	const data = await res.json();

// 	return { props: data, error };
// }
