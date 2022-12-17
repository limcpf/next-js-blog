import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AdminBackBtn from "../../../components/layout/admin/AdminBackBtn";

export default function PostUpload() {
	const { data: session } = useSession();
	const router = useRouter();

	const submit = () => {
		// @ts-ignore
		const title: string = document.getElementById("title").value;
		// @ts-ignore
		const contents: string = document.getElementById("contents").value;

		fetch("/api/admin/post", {
			method: "POST",
			body: JSON.stringify({
				title: title,
				contents: contents,
			}),
		})
			.then((res) => res.json())
			.then(() => {
				alert("성공적으로 저장했습니다!");
				router.push("/admin/post").then((r) => r);
			})
			.catch((err) => {
				alert("게시글 등록 실패...");
				console.log(err);
			});
	};

	if (!session?.user) { return <></>; }
	return (
		<>
			<AdminBackBtn />
			<div className="create-post-wrapper">
				<div className="create-post-bar">
					<div className="create-post-bar-title">제목</div>
					<div className="create-post-input">
						<input type="text" id="title" />
					</div>
				</div>
				<div className="create-post-bar">
					<div className="create-post-bar-title">내용</div>
					<div className="create-post-input">
						<textarea id="contents" rows={30} />
					</div>
				</div>
				<div className="create-post-btn">
					<button onClick={submit}>등록</button>
				</div>
			</div>
		</>
	);
}
