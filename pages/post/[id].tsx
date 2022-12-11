import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { iPost } from "../../shared/interface/post/post.interface";

export async function getServerSideProps(context: any) {
	return {
		props: { id: context.params.id },
	};
}

export default function Post({
	id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const [post, setPost] = useState<iPost>();

	useEffect(() => {
		fetch(`/api/post/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!post) { return <div> loading... </div>; }

	return (
		<div className="post-wrapper">
			<div className="post-header">
				<div className="post-title">{post.title}</div>
				<div className="post-info">
					<div />
					<div className="post-time">{post.createdAt}</div>
				</div>
			</div>
			<div className="post-body">
				<div className="post-contents">{post.contents}</div>
			</div>
		</div>
	);
}
