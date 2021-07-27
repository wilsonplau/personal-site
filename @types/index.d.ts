import matter from "gray-matter";

export interface ProjectMarkdown extends matter.GrayMatterFile {
	data: {
		[key: string]: any;
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
