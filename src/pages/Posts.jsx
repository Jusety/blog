import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import PostForm from "../Components/PostForm";
import PostList from "../Components/PostList";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/modal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../Components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
// import Pagination from "../Components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [vision, setVision] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(isLoading, lastElement, page<totalPages, ()=>{
        setPage(page+1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page]);

    const deletePost = (post) =>
        setPosts(posts.filter((p) => p.id !== post.id));

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVision(false);
    };

    // const changePage = (page) => {
    //     setPage(page);
    // };

    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

    return (
        <div className="App">
            <MyButton
                style={{ marginTop: "30px" }}
                onClick={() => setVision(true)}
            >
                Create post
            </MyButton>
            <MyModal vision={vision} setVision={setVision}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && <h1>Error! {postError}</h1>}
            <PostList
                remove={deletePost}
                posts={searchedAndSortedPosts}
                title="Post list"
            />
            <div ref={lastElement}/>
            {isLoading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}
                >
                    <Loader />
                </div>
            )  
            }
            {/* <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            /> */}
        </div>
    );
}

export default Posts;
