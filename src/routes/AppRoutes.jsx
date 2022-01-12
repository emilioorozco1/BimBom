import React from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import SignIn from "../users/SignIn";
import { logOut } from "../store/user";
import Videos from "../videos/Videos";
import VideosForm from "../videos/VideosForm";
import HomePage from "../Home";
import SignUp from "../users/SignUp";
import LogOutButton from "../users/LogOutButton";

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <h1>This page is not available</h1>
    </>
  );
};

let Error404 = () => {
  return (
    <>
      <Link to="/"> Home </Link>
      <h1>This page does not exist - 404</h1>
    </>
  );
};



let AppRoutes = (props) => {
  let user = useSelector((state) => state.user.user);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>

      <Route path="/users" element={user ? <Navigate to="/videos" /> : <Outlet />}>
        <Route path="register" element={<SignUp />}></Route>
        <Route path="login" element={<SignIn />}></Route>
        <Route path="profile" element={<NotImplemented />}> 
        </Route>
        <Route path=":id" element={<NotImplemented />}></Route>
        <Route path=":id/videos" element={<NotImplemented />}></Route>
      </Route>

      <Route path="" element={user ? <Outlet /> : <Navigate to="/users/login" />}>

      <Route path="/videos">
        <Route path="/" element={<Videos />}></Route>
        <Route path="new" element={<VideosForm />}></Route>
        <Route path=":id" element={<NotImplemented />}></Route>
      </Route>
      </Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default AppRoutes;
