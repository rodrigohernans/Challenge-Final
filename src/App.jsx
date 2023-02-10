import { RouterProvider } from "react-router-dom";
import indexRouter from "./router/index";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={indexRouter} />
    </Provider>
  );
}

export default App;
