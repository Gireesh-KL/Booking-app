import { Outlet } from "react-router-dom";
import Header from "./header.jsx"

export default function Layout(){
    return(
        <div className="p-4">
            <Header/>
            <Outlet/>
        </div>
    );
}