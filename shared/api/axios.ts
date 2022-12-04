import axios, {AxiosResponse} from 'axios';
import { iPost } from 'shared/interface/post/post.interface';

import { faker } from '@faker-js/faker';
import {User} from "next-auth";
import {AdapterUser} from "next-auth/adapters";

const blog = axios.create(
    {
        baseURL : "http://localhost:3000",
        withCredentials: true
    }
);


/** 서버 접속 테스트 */
export const getPong = ():Promise<string> => blog.get(`/admin`).then(({data}) => {
    return data;
});
/** 단일 포스트 가져오기 */
// export const getPost = (id: string | string[]):Promise<iPost> => new Promise((res, rej) => {
//     res();
// });
// export const getPost = (id:string | string[]):Promise<iPost> => blog.get(`/public/post/${id}`).then(({data}) => {
//     if(data?.contents) {
//         data.contents = makrdown.render(data.contents.replaceAll("\\x3C", "<"));
//     }
//     return data;
// });
// /** 포스트 목록 가져오기 */
// export const getPosts = (page: number, size: number, sort?:string[]):Promise<iPost[]> => blog.get(`public/post`, { params : {
//         page, size, sort
//     }
// })

export const getPosts = (page?: number, size?: number, sort?:string[]):Promise<iPost[]> => new Promise((res, rej) => {
    console.log(page, size, sort);
    console.log(rej);
    for(let i = 1; i <= 10; i++) {
        const post: iPost = {
            id: i,
            title: faker.lorem.lines(1),
            contents: faker.lorem.paragraph(10),
            published: Math.random() > 0.3 ? 0 : 1,
            updatedAt: faker.date.recent().toISOString(),
            createdAt: faker.date.recent().toISOString()
        }
        posts.push(post);
    }
    // @ts-ignore
    res(JSON.parse(posts));
});

interface getAuthData {
    accessToken: string;
    isSuccessLogin: string;
}
export const getAuth = (user: User | AdapterUser) => {
    return blog
            .post('/auth/login', user)
            .then(({data} : AxiosResponse<getAuthData>) => data);
};