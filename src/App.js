// import Pagination from "./component/pagination/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./App.css";

import Login from "./pages/Login/Login";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import PrivateRoute from "./component/PrivateComponent/PrivateRoutes";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  document.getElementsByTagName("body")[0].classList.add("light-theme");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route
               exact
               path= "/"
               element={<Navigate to= "/login" />}
            /> */}

          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<ContactUs />} />

            <Route path="*" element={<p>404 not found</p>} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
