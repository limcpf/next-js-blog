import { useDispatch } from "react-redux";
import { setPage } from "../../shared/redux/store/pagination";

type PostPaginationBtnProps = {
	num: number | undefined;
	now: number;
};

export default function PostPaginationBtn({
	num,
	now,
}: PostPaginationBtnProps) {
	const dispatch = useDispatch();
	const chgPage = () => dispatch(setPage(num));

	return (
		<div
			onClick={chgPage}
			className={
				`page-pagination-btn ${(now === num ? "page-pagination-btn-active" : "")}`
			}
		>
			{num}
		</div>
	);
}
