import type { AppProps } from "next/app";

import "../styles/Reset.scss";
import "../styles/App.scss";
import "aos/dist/aos.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default CustomApp;
