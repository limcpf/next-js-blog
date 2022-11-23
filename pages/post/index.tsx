import { useEffect, useState } from 'react';
import { iPost } from 'shared/interface/post/post.interface';

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
    <div className="grid">
        <div> 
            {
                posts ? posts.map((post) => (<h1 key={post.id}>{post.title}</h1>)) : <h1> none </h1>
            }
        </div>
    </div>
    
  )
}
