import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";
import ProductEdit from "./routes/ProductEdit";
import { configureStore } from "@reduxjs/toolkit";
import productViewReducer from "./store/productView";
import ProductView from "./routes/ProductView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/product",
        element: <ProductView />,
      },
      {
        path: "/product/edit",
        element: <ProductEdit />,
      },
    ],
  },
]);

const store = configureStore({
  reducer: {
    productView: productViewReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
