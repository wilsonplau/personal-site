import Layout from "../components/Layout";

import styles from "../styles/IndexPage.module.scss";

const IndexPage: React.FC<{}> = () => {
	return (
		<Layout>
			<div className={styles.index}>
				<div className={styles.index__hero}>
					<div className={styles.index__heroContainer}>
						<h1>
							I build beautiful things, as designer, developer, creator,
							entrepreneur.
						</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
