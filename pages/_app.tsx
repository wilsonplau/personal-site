import type { AppProps } from "next/app";

import "../styles/Reset.scss";
import "../styles/App.scss";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default CustomApp;
