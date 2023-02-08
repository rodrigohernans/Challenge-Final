import { RouterProvider } from "react-router-dom";
import indexRouter from "./router/index";

function App() {
    return <RouterProvider router={indexRouter} />;
}

export default App;
