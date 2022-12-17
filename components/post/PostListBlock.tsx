import { iPost } from "../../shared/interface/post/post.interface";
import { useRouter } from "next/router";
import {useSession} from "next-auth/react";

type PostListBlockProps = {
	post: iPost;
};

export default function PostListBlock({ post }: PostListBlockProps) {
	const router = useRouter();
	const { data: session } = useSession();

	const { id, title, createdAt, published } = post;
	const pub = published ? "게시됨" : "게시안됨";
	const time = new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(
		new Date(createdAt),
	);

	return (
		<div onClick={() => router.push(`/post/${id}`)} className="post-block">
			<div className="post-block-title">
				{title}
				<span className="post-block-time">{time} {session?.user ? pub : ""}</span>
			</div>
			<hr />
		</div>
	);
}
