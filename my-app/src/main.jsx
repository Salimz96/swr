import ReactDOM from "react-dom/client";
import Root from "./Root";

const appElement = <Root />;
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(appElement);
