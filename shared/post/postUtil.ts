export const convertDateToKorDate = (createdAt: string) =>
	new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(
		new Date(createdAt),
	);
