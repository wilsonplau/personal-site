import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/Reset.scss";
import "../styles/App.scss";
import "aos/dist/aos.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Wilson Lau</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default CustomApp;
