export interface BlogPost {
	[id: string]: {
		title: string;
		id: string;
		body: string;
		tags: string[];
	};
}
