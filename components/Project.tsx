import React, { useEffect } from "react";
import AOS from "aos";

import { ProjectMarkdown } from "../@types";
import styles from "../styles/Project.module.scss";

interface ProjectProps {
	project: ProjectMarkdown;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
	useEffect(() => AOS.init({ duration: 600, easing: "ease-in-out" }), []);

	return (
		<a href={project.data.link}>
			<div className={styles.project} data-aos="fade-up">
				<div className={styles.project__image}>
					<img src={project.data.image} alt={project.data.title} />
				</div>
				<div className={styles.project__left}>
					<h2>{project.data.title}</h2>
					<h3>
						{project.data.date} • <span>{project.data.role}</span>
					</h3>
				</div>
				<div className={styles.project__right}>
					<p>{project.data.description}</p>
				</div>
			</div>
		</a>
	);
};

export default Project;
