import Searchbar from "../Searchbar/searchbar";
import React from "react";

const SearchScreen = () => {
  return(
      <>
          <div>
              <section className="header">
                  <div className="flex">
                      <img className="mt-5" alt="webLogo" height="100px" src="../img/center-logo.png"/>
                  </div>
                  {Searchbar()}
              </section>
          </div>
      </>
  )
}
export default SearchScreen;