module.exports = {
  reactStrictMode: true,
 
}
const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://www.chernivtsiuniversity.vercel.app"
  : "https://localhost:1337";
