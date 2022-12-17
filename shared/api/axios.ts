import axios, { AxiosResponse } from "axios";
import { iPost } from "shared/interface/post/post.interface";

import { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

const blog = axios.create({
	baseURL: process.env.API_SERVER,
	withCredentials: true,
});

const authHeader = (auth: string) => {
	return {
		Authorization: auth,
	};
};

/** 서버 접속 테스트 */
export const getPong = (): Promise<string> => {
	return blog.get("/admin").then(({ data }) => {
		return data;
	});
};

/** 단일 포스트 가져오기 */
export const getPost = async (id: number): Promise<iPost> => {
	const { data } = await blog.get(`/post/${id}`);
	return data;
};

/** 포스트 목록 가져오기 */
export const getPosts = async (
	page: number,
	size: number,
	auth: string,
	sort?: string[],
) => {
	const { data } = await blog.get(auth ? "/admin/post" : "/post", {
		params: {
			page,
			size,
			sort,
		},
		headers: authHeader(auth),
	});

	return data;
};

/** 단일 포스트 가져오기 */
export const togglePublished = async (
	id: number,
	auth: string,
): Promise<iPost> => {
	const { data } = await blog.get(`/admin/post/publish/${id}`, {
		headers: authHeader(auth),
	});

	return data;
};

/** 포스트 생성하기 */
export const createPost = async (
	title: string,
	contents: string,
	auth: string,
): Promise<iPost> => {
	const { data } = await blog.post(
		"/admin/post",
		{
			title,
			contents,
		},
		{
			headers: {
				...authHeader(auth),
			},
		},
	);

	return data;
};

interface getAuthData {
	accessToken: string;
	isSuccessLogin: string;
}
export const getAuth = (user: User | AdapterUser) => {
	return blog
		.post("/auth/login", user)
		.then(({ data }: AxiosResponse<getAuthData>) => data);
};
