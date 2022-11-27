import axios from 'axios';
import { iPost } from 'shared/interface/post/post.interface';

import { faker } from '@faker-js/faker';

const blog = axios.create(
    {
        baseURL : "http://localhost:8080",
    }
);


/** 서버 접속 테스트 */
export const getPong = ():Promise<string> => blog.get(`/health`).then(({data}) => data);
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

export const getPosts = (page: number, size: number, sort?:string[]):Promise<iPost[]> => new Promise((res, rej) => {
    const posts: iPost[] = [];
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
    res(JSON.stringify(posts));
    
});