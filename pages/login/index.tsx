import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<>
				Signed in as {session.user.email} <br />
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
