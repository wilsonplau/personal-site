import React from "react";

import Layout from "../components/Layout";
import styles from "../styles/AmPage.module.scss";

const AmPage: React.FC<{}> = () => {
	return (
		<Layout>
			<div className={styles.am}>
				<div className={styles.am__hero}>
					<div className={styles.am__heroContainer}>
						<h1>
							I am currently in <span>Tokyo</span>,<br /> building the next{" "}
							<br />
							wonderful thing.
						</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AmPage;
