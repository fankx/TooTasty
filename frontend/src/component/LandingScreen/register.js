import React from "react";
import {Link} from "react-router-dom";
import Searchbar from "../Searchbar/searchbar";
import TopLikedRes from "../HomeScreen/topLikedRes";
import RecentReviewedRes from "../HomeScreen/recentReviewedRes";

const Register = () => {
    return (
        <>
            <div className="">
                <section className="header">
                    <div className="flex height-100vh">
                        <div className="log-in-form-box height-70vh">
                            <h3 className="text-white mt-2">Sign up</h3>
                            <button type="button" className="btn btn-outline-primary hero-btn"><Link to="/register/privacy">Review Privacy Policy</Link></button>
                            {/*<input className="m-2" type="text" placeholder="username"/>*/}
                            <input className="m-2" type="text" placeholder="firstname"/>
                            <input className="m-2" type="text" placeholder="lastname"/>
                            <input className="m-2"type="password" placeholder="password"/>
                            <input className="m-2"type="password" placeholder="email"/>
                            <input className="m-2" type="text" placeholder="location"/>
                            <input className="m-2" id="type" type="text" list="typelist" placeholder="Your Role"/>
                                <datalist id="typelist">
                                        <option>Customer</option>
                                        <option>Owner</option>
                                        <option>Admin</option>
                                </datalist>

                                {/*<select className="form-select" id="exampleSelect1">*/}
                                {/*    <option>Customer</option>*/}
                                {/*    <option>Owner</option>*/}
                                {/*    <option>Admin</option>*/}
                                {/*</select>*/}

                            <button type="button" className="btn btn-outline-primary hero-btn">Sign up</button>
                            <span className="text-white m-1">Already have an account? <Link to="/login">Log in</Link></span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Register;