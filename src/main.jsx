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
import QuienesSomos from './components/QuienesSomos/QuienesSomos.jsx';
import Informes from './components/Informes/Informes.jsx';
import Colaborar from './components/Colaborar/Colaborar.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/listado", element: <List /> },
      { path: "/colaborar", element: <Colaborar /> },
      { path: "/informes", element: <Informes /> },
      { path: "/quienes-somos", element: <QuienesSomos /> },



    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);