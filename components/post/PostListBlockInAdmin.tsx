import { iPost } from "../../shared/interface/post/post.interface";
import {useState} from "react";

type PostListBlockProps = {
    post: iPost;
};

export default function PostListBlockInAdmin({ post }: PostListBlockProps) {
    const { id, title, published } = post;

    const [pub, setPub] = useState<boolean>(!!published);

    const togglePublished = () => {
        fetch(`/api/post/pub/${id}`)
            .then((res) => res.json())
            .then((data) => {
                alert("수정되었습니다.");
                setPub(data.published);
            })
            .catch((err) => {
                alert("오류입니다.");
                console.error(err);
            });
    }

    return (
        <div onClick={togglePublished} className="post-block">
            <div className="post-block-title">
                {title}
                <span className="post-block-time">{pub ? "게시됨" : "게시안됨"}</span>
            </div>
            <hr />
        </div>
    );
}
