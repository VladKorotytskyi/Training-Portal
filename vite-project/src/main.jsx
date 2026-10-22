import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "../src/App.jsx";
import { store } from "../src/Components/redux/store.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
