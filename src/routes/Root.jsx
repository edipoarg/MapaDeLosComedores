import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
<Navbar/>
<Menu/>
<Outlet/>
</>
  );
}