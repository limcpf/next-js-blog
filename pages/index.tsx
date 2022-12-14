export default function Home() {
	return (
		<>
			<h1>Heelo README! Ver.221227</h1>
			<h2>블로그 소개</h2>
			<hr />
			<p>
				개발 공부 목적으로 만든 블로그입니다.
				<br />
				<s>(프론트에 재능이 없어 디자인이 깔끔하지 않은 점 양해 바랍니다.)</s>
			</p>
			<ul>
				<li>현재 개발중인 과제</li>
				<li>현 블로그 개발 스택</li>
				<li>블로그 제작자 정보</li>
			</ul>
			<h2>현재 개발중인 과제</h2>
			<hr />
			<p>
				블로그에 적용 예정인 기능들입니다.
				<br /> 현재 블로그는 10% 정도 완성되었다고 생각합니다.
				<br /> 연말연초엔 개발자가 바쁜 업계에 몸담고 있어서 현재 개발이
				더딘상태입니다...<s>핑계입니다</s>
			</p>
			<ul>
				<li>(Back) 포스트 분류를 위한 시리즈 개발</li>
				<li>(Front) 모바일 레이아웃 개발</li>
				<li>(Infra) 이미지 업로드 서버 개발</li>
				<li>(Front) Github 코드 조각 연동 개발</li>
			</ul>
			<h2>현 블로그 개발 스택</h2>
			<hr />
			<p>
				백, 프론트 모두 TypeScript를 사용하였습니다. 업으로는 Java를 사용하고
				있습니다.
				<br /> 대세를 따르지 않고 사용하고 싶은 스택을 사용했습니다.{" "}
				<s>하지만 프론트는 Next.js 입니다.</s>
			</p>
			<h3>
				<a href="https://github.com/limcpf/fastify-ts-blog">백엔드</a>
			</h3>
			<hr />
			<ul>
				<li>
					Fastify 4.9.2 버전을 사용중입니다.
					<ul>
						<li>
							실제 코드인 깃허브 저장소 내 package.json의 버전이 더 높아 질 수
							있습니다.
						</li>
						<li>추후 SpringBoot로 변경될 수 있습니다.</li>
					</ul>
				</li>
				<li>
					DB는 현재 Sqlite를 사용중에 있습니다.
					<ul>
						<li>ORM으로는 Prisma를 사용하고있습니다.</li>
						<li>
							추후 기능이 다양해지고 데이터가 좀 쌓이면 Postgresql로 migration할
							수 있겠지만...게을러서 그럴 가능성은 없어보입니다.
						</li>
					</ul>
				</li>
				<li>
					현재 호스팅은 Azure를 통해 하고있습니다.
					<br />
					<ul>
						<li>
							<s>공부중인데 모르겠으면 AWS로 옮길 예정입니다.</s>
						</li>
					</ul>
				</li>
			</ul>
			<h3>
				<a href="https://github.com/limcpf/next-js-blog">프론트엔드</a>
			</h3>
			<hr />
			<ul>
				<li>Next.js 13을 사용중에 있습니다.</li>
				<li>
					상태관리로는 redux를 사용중에 있습니다.
					<ul>
						<li>추후에 확실하게 react-query로 변경예정입니다.</li>
					</ul>
				</li>
				<li>
					<s>
						프론트엔 큰 관심도 재능도 없어서 그러려니하고 사용중에 있습니다.
						양해바랍니다.
					</s>
				</li>
			</ul>
			<h3>공통</h3>
			<hr />
			<ul>
				<li>
					모두 TypeScript 4.8.4 버전을 사용중에 있습니다.
					<ul>
						<li>
							이 또한 각각의 깃허브 저장소 내 package.json의 버전이 더 높아 질
							수 있습니다.
						</li>
					</ul>
				</li>
				<li>
					린트,포매터 라이브러리로 ROME을 사용중에 있습니다.
					<ul>
						<li>
							추후에 빌드, 컴파일 및 테스트까지 지원한다는 목표로 개발되고 있는
							라이브러리입니다.
						</li>
						<li>관심을 가지고 계속 사용해볼 예정입니다.</li>
					</ul>
				</li>
			</ul>
			<h2>블로그 제작자 정보</h2>
			<hr />
			<p>
				보험(금융) 시스템 유지보수 개발중인 20대 중반 사람입니다.
				<br /> 이 블로그는 진짜 단순한 TIL, 개발 욕구 해소용으로 만들어진
				블로그입니다.
				<br />
				<s>언제 사라져도 이상하지 않을 곳이니 트래픽 발생시키지 말아주세요.</s>
				<br /> 문의는 daeseong0226@gmail.com 으로 받습니다.
			</p>
		</>
	);
}
