import { RouterProvider } from "react-router-dom";
import indexRouter from "./router/index";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={indexRouter} />;
        </Provider>
);

}

export default App;
