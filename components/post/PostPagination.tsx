import {useEffect, useState} from "react";
import PostPaginationBtn from "./PostPaginationBtn";
import {useDispatch} from "react-redux";
import {setPage} from "../../shared/redux/store/pagination";

type PostPaginationProps = {
    cnt: number;
    page: number;
};

export default function PostPagination({ cnt, page }: PostPaginationProps) {
    const [left, setLeft] = useState<number>(1);
    const [list, setList] = useState<(number | undefined)[]>([]);

    const calculateList = () => Array(5).fill(0).map((v, i) => {
        if(left + i <= cnt) return left + i;
    }).filter((i) => i);

    const dispatch = useDispatch();
    const chgPage = (num: number) => dispatch(setPage(num));

    useEffect(() => {
        setList(calculateList());
    }, [left]);

    const chgList = (n: number, isPrev: boolean ) => {
        setLeft(n);
        chgPage(isPrev ? n + 4 : n);
    }

    const spreadBtn = (isPrev: boolean) => {
        const num = isPrev ? left - 5 : left + 5;

        return <div onClick={() => chgList(num, isPrev)} className="page-pagination-btn">
            ...
        </div>;
    }

    return (
        <div className="post-pagination-wrapper">
            { left > 5 && spreadBtn(true) }
            { list && list.map((num) => <PostPaginationBtn key={num} now={page} num={num} />) }
            { cnt > left + 5 && spreadBtn(false) }
        </div>
    );
}
