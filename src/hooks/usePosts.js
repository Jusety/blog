import { useMemo } from "react";

const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(query) ||
                post.title.toUpperCase().includes(query) ||
                post.title.includes(query)
        );
    }, [sortedPosts, query]);
    return searchedAndSortedPosts;
};
