import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../Components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFetching(async ()=>{
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading] = useFetching(async()=>{
        const response = await PostService.getComments(params.id);
        setComments(response.data);
    })

    useEffect(()=>{
        fetchComments();
        fetchPostById();
    }, [])

    return (
        <div className="postById">
            <h1>Post</h1>
            {isLoading
            ?<Loader/>
            :<div className="postByIdContent">{post.id}. {post.title} <hr/>{post.body}</div>}
            <h1>Comments</h1>
            {isComLoading
            ?<Loader/>
            :comments.map(comment=>{
                return <div className="postComm" key={comment.id}><h4>{comment.email}</h4> {comment.body} <hr /></div>
            })
            }
        </div>
    )
};

export default PostIdPage;
