// import Pagination from "./component/pagination/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Symtoms from "./pages/Symtoms/Symtoms";
import SymtomsDetails from "./pages/SymtomsDetails/SymtomsDetails";
import "./App.css";
import { routPath } from "./routes/endPoint";
import ServiceHistory from "./pages/ServiceHistory/ServiceHistory";

function App() {
  document.getElementsByTagName("body")[0].classList.add("light-theme");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path={routPath.serviceHistory}
          element={<ServiceHistory />}
        />
        <Route exact path="/symtoms-details" element={<Symtoms />} />
        <Route exact path="/symtoms-details/:id" element={<SymtomsDetails />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Pagination />
    // </div>
  );
}

export default App;
