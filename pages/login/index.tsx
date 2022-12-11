import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component() {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<>
				<Link href="/admin/post">post 목록보기</Link>
				<br />
				<Link href="/admin/upload">post 올리기</Link>
				<br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}

	// 사용자 정보 없으면, 로그인 버튼 출력 - signIn() 함수는 next-auth기본 로그인화면으로 이동시켜준다.
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}
