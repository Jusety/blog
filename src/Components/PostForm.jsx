import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [postObj, setPostObj] = useState({ title: "", body: "" });

    const addPost = e => {
        e.preventDefault();
        create({id:Date.now(), ...postObj});
        setPostObj({title:"", body:""});
    };

    return (
        <form>
                <MyInput
                    onChange={(e) =>
                        setPostObj({ ...postObj, title: e.target.value })
                    }
                    type="text"
                    placeholder="Post name"
                    value={postObj.title}
                />
                <MyInput
                    type="text"
                    placeholder="Post description"
                    value={postObj.body}
                    onChange={(e) =>
                        setPostObj({ ...postObj, body: e.target.value })
                    }
                />
                <MyButton onClick={addPost}>
                    Add post
                </MyButton>
            </form>
    )
};

export default PostForm;
