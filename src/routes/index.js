import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../component/PrivateComponent/PrivateRoutes";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Login from "../pages/Login/Login";
import RegisterUser from "../pages/RegisterUser/RegisterUser";
import { routePaths } from "./routePaths";

const AppRoutes=()=> {
  document.getElementsByTagName("body")[0].classList.add("light-theme");
  return (
      <BrowserRouter>
        <Routes>
          {/* <Route
               exact
               path= "/"
               element={<Navigate to= "/login" />}
            /> */}

          <Route element={<PrivateRoute />}>
            <Route exact path={routePaths.root} element={<Home />} />
            <Route exact path={routePaths.about} element={<About />} />
            <Route exact path={routePaths.contact} element={<ContactUs />} />
            <Route exact path={`${routePaths.product}/:id`} element={<SingleProduct />} />

            <Route path="*" element={<p>404 not found</p>} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;

