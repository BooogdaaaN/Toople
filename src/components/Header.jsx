import "../stylesheets/Header.scss";

import logo from "../img/p/logo.png";
import logo2x from "../img/p/logo@2x.png";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/index.js";
function Header() {
    const context = useContext(AuthContext);
    const isAuth = context.isAuth;
    return (
        <header className="header">
            <div className="header__logo">
                <picture>
                    <Link to="/">
                        <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
                    </Link>
                </picture>
            </div>
            <nav>
                <ul>
                    <NavLink to="courses">Курсы Moodle</NavLink>
                    {isAuth && <NavLink to="profile/me">Профиль</NavLink>}
                    {isAuth && (
                        <NavLink to="create">Разместить задание</NavLink>
                    )}
                    <NavLink to="about">О сайте</NavLink>
                </ul>
            </nav>
            {!isAuth && (
                <Link to="login">
                    <button className="header__signup-btn">Войти</button>
                </Link>
            )}
        </header>
    );
}

function NavLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: false });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Header;
