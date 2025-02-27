import { SWRConfig } from "swr";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const fetcher = (url) => fetch(url).then((response) => response.json());

console.log("fetcher:", fetcher);

export default function Root() {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
