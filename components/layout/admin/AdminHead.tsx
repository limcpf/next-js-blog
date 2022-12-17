import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AdminHead() {
	const { data: session } = useSession();

	return session?.user != null ? (
		<>
			<Link href="/admin/post">post 목록보기</Link>
			<Link href="/admin/upload">post 올리기</Link>
			<button onClick={() => signOut()}>로그아웃</button>
		</>
	) : (
		<>
			<br />
			<button onClick={() => signIn()}>로그인</button>
		</>
	);
}
