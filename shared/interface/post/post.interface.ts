export interface iPost {
	id: number;
	title: string;
	contents: string;
	published: number;
	createdAt: string;
	updatedAt: string;
}

export interface PostPageObject {
	post: iPost;
}
