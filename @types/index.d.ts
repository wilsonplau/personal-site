import matter from "gray-matter";

export interface ProjectMarkdown extends matter.GrayMatterFile {
	data: {
		date: string;
		description: string;
		image: string;
		link: string;
		order: number;
		path: string;
		role: string;
		roles: string[];
		title: string;
		tools: string[];
	};
}

export interface ArticleMarkdown extends matter.GrayMatterFile {
	data: {
		collection: string[];
		date: Date;
		path: string;
		tags: string[];
		title: string;
	};
}
