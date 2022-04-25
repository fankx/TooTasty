// import './vendors/fontawesome/css/all.min.css';
// import './vendors/bootstrap/bootstrap.min.css'
// import './vendors/css/index.css'
// import HomeScreen from "./components/HomeScreen/homescreen";
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
// import LogInScreen from "./components/LandingScreen/logInScreen";
// import Register from "./components/LandingScreen/register";
// import PrivacyPolicy from "./components/LandingScreen/privacyPolicy";
// import SearchScreen from "./components/SeaechScreen/searchScreen";
// import React from "react";
// import UserProfile from "./components/ProfileScreen/userProfile";
import NavbarComp from "./component/Navbar/NavbarComp";
import './App.css';
import './vendors/css/index.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import RestaurantScreen from "./component/RestaurantScreen/restaurantScreen";
import HomeScreen from "./component/HomeScreen/homescreen";
import EditProfile from "./component/EditProfile/editProfile";
//import UserProfile from "./component/ProfileScreen/user/userProfile";
import ProfileScreen from "./component/ProfileScreen/profileScreen";
import TooTasty from "./component";
import LogInScreen from "./component/LandingScreen/logInScreen";
import Register from "./component/LandingScreen/register";
import PrivacyPolicy from "./component/LandingScreen/privacyPolicy";
import SearchScreen from "./component/SeaechScreen/searchScreen";
import UserProfile from "./component/ProfileScreen/userProfile";

function App() {
    return (
        <>

            <BrowserRouter>
                <NavbarComp/>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomeScreen/>}/>

                        <Route path="tootasty" element={<TooTasty/>}>
                            <Route path="login" element={<LogInScreen/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="register/privacy" element={<PrivacyPolicy/>}/>
                            <Route path="home" element={<HomeScreen/>}/>
                            <Route path="search" element={<SearchScreen/>}/>
                            <Route path="restaurant" element={<RestaurantScreen/>}/>
                            {/*<Route path="profile" element={<ProfileScreen/>}/>*/}
                            <Route path="profile" element={<UserProfile/>}/>
                            <Route path="edit" element={<EditProfile/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            <div className="flex mt-5">
                <h6 className="text-decoration-none ">Copyright © 2004–2022 TooTasty Inc. TooTasty burst and related marks are registered trademarks of TooTasty.</h6>
            </div>

        </>
    );
}

export default App;

// import './App.css';
// import './vendors/css/index.css'
// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
// import RestaurantScreen from "./component/RestaurantScreen/restaurantScreen";
// import HomeScreen from "./component/HomeScreen/homescreen";
// import EditProfile from "./component/EditProfile/editProfile";
// //import UserProfile from "./component/ProfileScreen/user/userProfile";
// import ProfileScreen from "./component/ProfileScreen/profileScreen";
// import TooTasty from "./component";
// import LogInScreen from "./component/LandingScreen/logInScreen";
// import Register from "./component/LandingScreen/register";
// import PrivacyPolicy from "./component/LandingScreen/privacyPolicy";
// import SearchScreen from "./component/SeaechScreen/searchScreen";
//
// function App() {
//
//   return (
//     <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/">
//                     <Route index element={<HomeScreen/>}/>
//
//                     <Route path="tootasty" element={<TooTasty/>}>
//                         <Route path="login" element={<LogInScreen/>}/>
//                         <Route path="register" element={<Register/>}/>
//                         <Route path="register/privacy" element={<PrivacyPolicy/>}/>
//                         <Route path="search" element={<SearchScreen/>}/>
//                         <Route path="home" element={<HomeScreen/>}/>
//                         <Route path="restaurant" element={<RestaurantScreen/>}/>
//                         <Route path="profile" element={<ProfileScreen/>}/>
//                         <Route path="edit" element={<EditProfile/>}/>
//                     </Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </>
//   );
// }
//
// export default App;
