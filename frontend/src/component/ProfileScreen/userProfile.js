import React from "react";
import UserCard from "./userCard";
import UserDetail from "./userDetail";
import UserReviews from "./userReviews";
import FavouriteRes from "../HomeScreen/favouriteRes";
import user from "../datafornow/user.json"

const UserProfile = () => {
  return(
      <>
          <div>
              <section className="header height-auto">
                  <div className="row">
                      <div className="col-4">
                          {UserCard(user)}
                      </div>
                      <div className="col-8">
                          {UserDetail(user)}
                          {UserReviews()}
                          {FavouriteRes()}
                      </div>
                  </div>
              </section>
          </div>
      </>
  )
}
export default UserProfile;