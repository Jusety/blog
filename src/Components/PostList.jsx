import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    !posts.length&&<h1 style={{ textAlign: "center" }}>There's no posts!</h1>

    return (
        <div >
            <h1 style={{textAlign:"center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index)=>{
            return <CSSTransition key={post.id}
            classNames="post" timeout={500}>
            <PostItem  remove={remove}  post={post} number={index+1}/>
            </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    )
};

export default PostList;
