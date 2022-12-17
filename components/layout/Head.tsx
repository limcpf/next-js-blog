import HeadMenuLink from "./HeadMenuLnk";
import { useRouter } from "next/router";
import {useSelector} from "react-redux";
import {RootState} from "../../shared/redux/store";

export default function Header() {
	const asPath = useRouter().asPath;
	const includesPostInAsPath = asPath.split("/").includes("post");
	const recentPostId = useSelector((state: RootState) => state.pagination.recentPost);
	const isActivePostBtn = asPath !== "/post" && includesPostInAsPath;

	return (
		<div className="grid head-wrapper">
			<div>
				<span>Heelo</span>
			</div>
			<div className="head-menu">
				<HeadMenuLink path="/" text="Home" isActive={asPath === "/"} />
				{recentPostId
					? (
						<HeadMenuLink path={`/post/${recentPostId}`} text="Post" isActive={isActivePostBtn} />
					)
					: (
						<span
							className="tooltip-link" data-tooltip="최근 본 포스트가 없습니다."
							style={isActivePostBtn ? { fontWeight: "normal" } : {}}
						>
							Post
						</span>
					)
				}
				<HeadMenuLink path="/post" text="List" isActive={asPath === "/post"} />
			</div>
		</div>
	);
}
