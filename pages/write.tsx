import React from "react";

import Layout from "../components/Layout";
import styles from "../styles/WritePage.module.scss";

const WritePage: React.FC<{}> = () => {
	return (
		<Layout>
			<div className={styles.write}>
				<div className={styles.write__hero}>
					<div className={styles.write__heroContainer}>
						<h1>
							I write about things I’m interested in to learn,
							<br /> reflect, and explore.
						</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default WritePage;
