import "./App.css";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import store from "./redux/store";

function App() {
  document.getElementsByTagName("body")[0].classList.add("light-theme");
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
