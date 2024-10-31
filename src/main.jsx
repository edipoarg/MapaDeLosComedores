import React from 'react';
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import List from "./List/List.jsx";
import Us from './components/us/Us.jsx';


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/listado", element: <List /> },
      { path: "/us", element: <Us /> },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);