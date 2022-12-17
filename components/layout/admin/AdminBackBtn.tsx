import React from "react";
import { useRouter } from "next/router";

export default function AdminBackBtn() {
	const router = useRouter();

	return (
		<div className="admin-back-btn" onClick={() => router.push("/admin")}>
			<span>뒤로가기</span>
		</div>
	);
}
