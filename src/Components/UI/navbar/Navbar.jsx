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
                    <Link
                        className="link"
                        to="/about"
                        style={{
                            marginLeft: 100,
                            position: "relative",
                            top: "20px",
                        }}
                    >
                        About us
                    </Link>{" "}
                    <br />
                    <Link
                        className="link"
                        to="/posts"
                        style={{ position: "relative", bottom: "22px" }}
                    >
                        Posts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
