import Searchbar from "../Searchbar/searchbar";
import TopLikedRes from "../HomeScreen/topLikedRes";
import RecentReviewedRes from "../HomeScreen/recentReviewedRes";
import React from "react";
const HomeScreen = () => {
    return(
        <>
            <div>
                <section className="header">
                    <div className="flex">
                        <img className="mt-5" alt="webLogo" height="100px" src="../img/center-logo.png"/>
                    </div>
                    {Searchbar()}
                </section>

                <section className="homepage-card-section">
                    {TopLikedRes()}
                    {RecentReviewedRes()}
                </section>
            </div>
        </>
    )
}
export default HomeScreen;