import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddPost from "./Pages/AddPost";
import Details from "./Pages/Details";
import EditPost from "./Pages/EditPost";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Layout from "./Pages/Layout";
import store from "./State/Index";
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "post/add",
        element: <AddPost />,
      },
      {
        path: "post/:id/edit",
        element: <EditPost />,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "please make sure to insert correct post ID",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
