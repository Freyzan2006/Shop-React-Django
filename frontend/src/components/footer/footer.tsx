import React from "react";

// css 
import css from './footer.module.scss';
//

// components 
import MyLink from "../Mylink/Link";
//

const Footer: React.FC = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><MyLink to = {'/'} name = "Главная страница" class = {`${css.menu__link} nav-link px-2`} /></li>
                <li className="nav-item"><MyLink to = {'about/'} name = "О нас" class = {`${css.menu__link} nav-link px-2`} /></li>
            </ul>
            <p className="text-center  text-white">© 2023 Company, Inc</p>
        </footer>
    )
}

export default Footer;