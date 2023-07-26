import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
                <MyInput
                    placeholder="Search"
                    value={filter.query}
                    onChange={(e) => setFilter({...filter, query:e.target.value})}
                />
                <MySelect
                    value={filter.sort}
                    onChange={(sort)=>setFilter({...filter, sort:sort.target.value})}
                    defaultValue="Sort by"
                    options={[
                        { value: "title", name: "title" },
                        { value: "body", name: "description" },
                    ]}
                />
            </div>
    )
};

export default PostFilter;
