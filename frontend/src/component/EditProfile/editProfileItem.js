
import Confirm from './confirm';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";


const EditProfileItem = ({profile}) => {

    let [firstname, setFirstname] = useState(profile.firstname);
    let [lastname, setLastname] = useState(profile.lastname);
    let [bio, setProfileBio] = useState(profile.bio);
    let [location, setProfileLocation] = useState(profile.location);
    let [dateOfBirth, setProfileDateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();

    const editProfileClickHandler = (profile) => {
        dispatch({
            type: 'edit-profile',
            firstname: profile.firstname,
            lastname: profile.lastname,
            bio: profile.bio,
            location: profile.location,
            dateOfBirth: profile.dateOfBirth,
        });
    }


    return (
        <>

        <form className="pt-5 form-width">
            <div className="form-group my-2 ">
                <label htmlFor="name" className="form-label mx-3 font-white"> First Name</label>
                <input
                    required
                    id="firstname"
                    type="text"
                    className="form-control"
                    placeholder={profile.firstname}
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="name" className="form-label mx-3 font-white"> Last Name</label>
                <input
                    required
                    id="lastname"
                    type="text"
                    className="form-control"
                    placeholder={profile.lastname}
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="bio" className="form-label mx-3 font-white">Bio</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={profile.bio}
                    value={bio}
                    onChange={(event) => setProfileBio(event.target.value)}
                />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="location" className="form-label mx-3 font-white">Location</label>
                <input
                    type="text"
                    className="form-control "
                    placeholder={profile.location}
                    value={location}
                    onChange={(event) => setProfileLocation(event.target.value)}
                />
            </div>

            {/*<div className="form-group my-2">*/}
            {/*    <label htmlFor="dateOfBirth" className="form-label mx-3 font-white">Date of birth</label>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        className="form-control"*/}
            {/*        placeholder={profile.dateOfBirth}*/}
            {/*        value={dateOfBirth}*/}
            {/*        onChange={(event) => setProfileDateOfBirth(event.target.value)}*/}
            {/*    />*/}
            {/*</div>*/}
        </form>

            <div className="position-relative btn-pos align-self-center my-2 pt-2">

                    <button onClick={()=>editProfileClickHandler(profile)}
                        onSubmit={()=>Confirm()}
                        className="btn btn-primary">Save</button>

            </div>

    </>
    );
}
export default EditProfileItem;