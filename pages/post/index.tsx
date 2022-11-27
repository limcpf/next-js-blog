import { useEffect, useState } from 'react';
import { iPost } from 'shared/interface/post/post.interface';
import PostListBlock from "../../components/post/PostListBlock";

export default function Posts() {
    const [posts, setPosts] = useState<iPost[]>();
    const [page] = useState(1);

    useEffect(() => {
        fetch(`/api/post?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            setPosts(JSON.parse(data));
        })
        .catch((err) => {
            console.log(err);
            setPosts([]);
        })
    }, [page]);
  return (
    <div className="grid post-list">
            {
                posts ? posts.map((post) => (<PostListBlock post={post} />)) : <h1> none </h1>
            }
    </div>
    
  )
}
