import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="post" style={{ borderRadius: "10px" }}>
            <div className="postContent">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="postBtn">
                <MyButton
                    id="btn"
                    onClick={() => navigate(`/posts/${props.post.id}`)}
                >
                    Open
                </MyButton>
                <MyButton id="btn" onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
