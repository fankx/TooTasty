
import React, {useState} from "react";
import UserCardEditProfile from "./userCardEditProfile";
import EditProfileItem from "./editProfileItem";
import "./editProfile.css";
import {useSelector} from "react-redux";
import profile from "../../data/profile.json";

const EditProfile = () => {

    const profile = useSelector((state) => state.profile);
    console.log(profile);

    return(
        <>
            <div>

                <section className="header height-auto">
                    <div className="row">
                        <div className="col-4">
                            <UserCardEditProfile profile={profile}/>
                        </div>
                        <div className="col-8">
                            <EditProfileItem profile={profile}/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default EditProfile;