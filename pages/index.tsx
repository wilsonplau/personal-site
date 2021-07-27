import React from "react";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import Layout from "../components/Layout";
import styles from "../styles/IndexPage.module.scss";
import { ProjectMarkdown } from "../@types";
import Project from "../components/Project";

interface IndexPageProps {
	projectData: string[];
}

const IndexPage: React.FC<IndexPageProps> = ({ projectData }) => {
	const projects = projectData
		//@ts-ignore
		.map((mdString) => matter(mdString) as ProjectMarkdown)
		.sort((projectA, projectB) => projectA.data.order - projectB.data.order);

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
				<div className={styles.index__projects}>
					{projects.map((project) => (
						<Project key={project.data.path} project={project} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export async function getStaticProps() {
	const projectData: string[] = [];
	const BUILD_PATH = join(process.cwd(), "data", "build");
	const files = fs.readdirSync(BUILD_PATH);
	for (const file of files) {
		const markdown = await require(`../data/build/${file}`);
		projectData.push(markdown.default);
	}
	return { props: { projectData } };
}
