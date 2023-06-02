import { Outlet } from "react-router-dom";
import SideBar from "../pages/Home/SideBar/SideBar";

const Main = () => {
    return (
        <>
            <SideBar>
            <Outlet />
            </SideBar>
        </>
    );
};

export default Main;