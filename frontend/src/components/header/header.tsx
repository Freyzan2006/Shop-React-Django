import React from "react";
import MyLink from "../Mylink/Link";

// icons
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
//

// components
import Search from "../search/Search";
//

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className ="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <MyLink to = {'/'} name = "LOGO" class =  'navbar-brand' icon = {<FaShoppingCart />} /> 

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse gap-2" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <MyLink to = {'/'} name = "Главная страница" class =  'nav-link' icon = {<FaHome />} /> 
                            </li>
                            <li className="nav-item">
                                <MyLink to = {'about/'} name = "О нас" class =  'nav-link' icon = {<FcAbout />} /> 
                            </li>
                        </ul>
                        <Search />
                        <MyLink to = '/login' name = "Вход" class="btn btn-outline-success" />
                        <MyLink to = '/reg' name = "Регистрация" class="btn btn-outline-success " />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;