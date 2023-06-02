
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-li-style bg-bgHover"
                    : "sidebar-li-style hover:bg-bgHover"

            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;