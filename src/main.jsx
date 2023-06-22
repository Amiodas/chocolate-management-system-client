import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewChocolate from "./components/NewChocolate/NewChocolate.jsx";
import DisplayChocolates from "./components/DisplayChocolates/DisplayChocolates.jsx";
import UpdateChocolate from "./components/UpdateChocolate/UpdateChocolate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DisplayChocolates />,
      },
      {
        path: "/newChocolate",
        element: <NewChocolate />,
      },
      {
        path: "/updateChocolate/:id/edit",
        element: <UpdateChocolate />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chocolates/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
