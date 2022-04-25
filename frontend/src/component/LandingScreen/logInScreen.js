import React from "react";
import {Link} from "react-router-dom";
import Searchbar from "../Searchbar/searchbar";
import TopLikedRes from "../HomeScreen/topLikedRes";
import RecentReviewedRes from "../HomeScreen/recentReviewedRes";

const LogInScreen = () => {
    return (
        <>
            <div className="">
                <section className="header">
                    <div className="flex height-100vh">
                        <div className="log-in-form-box">
                            <h3 className="text-white mt-2">login</h3>
                            <input className="m-2" type="email" placeholder="email"/>
                            <input className="m-2"type="password" placeholder="password"/>
                            <button type="button" className="btn  btn-outline-primary hero-btn"><Link to="/register">Log In</Link></button>
                            <span className="text-white m-1">New to TooTasty? <Link to="/register">Sign up</Link></span>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default LogInScreen;