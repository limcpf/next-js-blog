import HeadMenuLink from "./HeadMenuLnk";
import { useRouter } from "next/router";

export default function Header() {
	const asPath = useRouter().asPath;
	const includesPostInAsPath = asPath.split("/").includes("post");

	const isActivePostBtn = asPath !== "/post" && includesPostInAsPath;

	return (
		<div className="grid head-wrapper">
			<div>
				<span>Heelo</span>
			</div>
			<div dir="rtl" className="head-menu">
				<HeadMenuLink path="/" text="Home" isActive={asPath === "/"} />
				<span style={isActivePostBtn ? { fontWeight: "normal" } : {}}>
					Post
				</span>
				<HeadMenuLink path="/post" text="List" isActive={asPath === "/post"} />
			</div>
		</div>
	);
}
