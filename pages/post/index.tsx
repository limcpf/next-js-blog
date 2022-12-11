import { useEffect, useState } from "react";
import { iPost } from "shared/interface/post/post.interface";
import PostListBlock from "../../components/post/PostListBlock";
import PostPagination from "../../components/post/PostPagination";
import { RootState } from "../../shared/redux/store";
import { useSelector } from "react-redux";

export default function Posts() {
	const [posts, setPosts] = useState<iPost[]>([]);
	const [cnt, setCnt] = useState<number>(0);

	const page = useSelector((state: RootState) => state.pagination.page);

	useEffect(() => {
		fetch(`/api/post?page=${page}`)
			.then((res) => res.json())
			.then(({ data, cnt }) => {
				setPosts(data);
				setCnt(cnt % 10 === 0 ? cnt / 10 : cnt / 10 + 1);
			})
			.catch((err) => {
				console.error(err);
				setPosts([]);
				setCnt(0);
			});
	}, [page]);

	return (
		<>
			<div className="grid post-list">
				{posts ? (
					posts.map((post) => <PostListBlock key={post.id} post={post} />)
				) : (
					<h1> loading... </h1>
				)}
			</div>
			{posts.length > 0 && <PostPagination cnt={cnt} page={page} />}
		</>
	);
}
