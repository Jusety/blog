import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar">
                {isAuth && (
                    <MyButton
                        onClick={() => {
                            localStorage.removeItem("auth");
                            setIsAuth(false);
                        }}
                    >
                        Exit
                    </MyButton>
                )}
                <div className="navbar__links">
                    <Link className="link" to="/about">
                        About us
                    </Link>{" "}
                    <br />
                    <Link className="link" to="/posts">
                        Posts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
