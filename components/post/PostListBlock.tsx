import { iPost } from "../../shared/interface/post/post.interface";
import { useRouter } from "next/router";
import {convertDateToKorDate} from "../../shared/post/postUtil";

type PostListBlockProps = {
	post: iPost;
};

export default function PostListBlock({ post }: PostListBlockProps) {
	const router = useRouter();

	const { id, title, createdAt } = post;
	const time = convertDateToKorDate(createdAt);

	return (
		<div onClick={() => router.push(`/post/${id}`)} className="post-block">
			<div className="post-block-title">
				{title}
				<span className="post-block-time">{time}</span>
			</div>
			<hr />
		</div>
	);
}
