import {Link} from "react-router-dom";
import './userprofile.css'
import LetterAvatars from "../EditProfile/letterAvatars";
import React from "react";
const UserCard = ({
                      profile = {
                          "_id": "34238432784901",
                          "name": "Alice Wonderland",
                          "firstname": "Alice",
                          "lastname": "Wonderland",
                          "email": "alice@134.com",
                          "role": "customer",
                          "bio": "I love eatting!",
                          "location": "Watertown",
                          "image_url": "./img/top-liked-1.jpg"
                      }
                  }) => {
    return(
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">
                    <div className="avatar-position-profile">
                        <LetterAvatars name={profile.name}/>
                    </div>
                    <h3 className="user-card-name text-white">{profile.name}
                    </h3>
                    <span className="badge rounded-pill bg-primary disabled">{profile.role}</span>
                    <p className="text-white">{profile.bio}</p >

                    {/*<ul className="list-group mb-4">*/}
                    {/*<li className="list-group-item"><Link to="#">Follower</Link></li>*/}
                    {/*<li className="list-group-item"><Link to="#">Following</Link></li>*/}
                    {/*<li className="list-group-item"><Link to="#">Reviews</Link></li>*/}
                    {/*<li className="list-group-item"><Link to="#">Favourite restaurants</Link></li>*/}
                    {/*</ul>*/}
                    <Link to="/tootasty/edit">
                        <button type="reset" className="btn btn-outline-white">Edit Profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default UserCard;