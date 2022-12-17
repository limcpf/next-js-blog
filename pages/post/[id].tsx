import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { iPost } from "../../shared/interface/post/post.interface";
import md from "../../shared/post/markdown";
import { useDispatch } from "react-redux";
import { setRecentPost } from "../../shared/redux/store/pagination";
import { convertDateToKorDate } from "../../shared/post/postUtil";
import Head from "next/head";

export async function getServerSideProps(context: any) {
	return {
		props: { id: context.params.id },
	};
}

export default function Post({
	id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const [post, setPost] = useState<iPost>();

	const dispatch = useDispatch();
	const chgRecentPost = (id: number) => dispatch(setRecentPost(id));

	function createMarkup(contents: string) {
		return { __html: md.render(contents) };
	}

	function convertContents(contents: string) {
		return (
			<div
				className="post-contents"
				dangerouslySetInnerHTML={createMarkup(contents)}
			/>
		);
	}

	useEffect(() => {
		fetch(`/api/post/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
				chgRecentPost(data.id);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);

	if (!post) {
		return <div> loading... </div>;
	}

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta property="og:title" content={post.title} key="title" />
			</Head>
			<div className="post-wrapper">
				<div className="post-header">
					<div className="post-title">{post.title}</div>
					<div className="post-info">
						<div />
						<div className="post-time">
							{convertDateToKorDate(post.createdAt)}
						</div>
					</div>
				</div>
				<div className="post-body">
					{post.contents ? convertContents(post.contents) : <></>}
				</div>
			</div>
		</>
	);
}
