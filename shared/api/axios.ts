import axios, { AxiosResponse } from "axios";
import { iPost } from "shared/interface/post/post.interface";

import { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

const blog = axios.create({
	baseURL: "http://localhost:3000",
	withCredentials: true,
});

/** 서버 접속 테스트 */
export const getPong = (): Promise<string> =>
	blog.get("/admin").then(({ data }) => {
		return data;
	});
/** 단일 포스트 가져오기 */
export const getPost = (id:string | string[]):Promise<iPost> => blog.get(`/post/${id}`).then(({data}) => {
    // if(data?.contents) {
    //     data.contents = makrdown.render(data.contents.replaceAll("\\x3C", "<"));
    // }
    return data;
});

/** 포스트 목록 가져오기 */
export const getPosts = async (page: number, size: number, sort?:string[]) => {
	const { data } = await blog.get(`/post`, { params : {
			page, size, sort
		}
	});

	return data;
}

interface getAuthData {
	accessToken: string;
	isSuccessLogin: string;
}
export const getAuth = (user: User | AdapterUser) => {
	return blog
		.post("/auth/login", user)
		.then(({ data }: AxiosResponse<getAuthData>) => data);
};
