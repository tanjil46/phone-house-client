import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footers from "../Homepage/Footers";





const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
    
        </div>
    );
};

export default Roots;