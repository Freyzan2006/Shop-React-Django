import React, { useEffect, useState } from "react";
import axios from "axios";

// css
import css from './SideBar.module.scss';
//

// components 
import MyLink from "../Mylink/Link";
//

// interface
import { ICategory } from "../../redux/Interface";
//

const SideBar: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/allCategory/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={"d-flex flex-column flex-shrink-0 p-3 text-bg-dark " + css.SideBar} >
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            
                <span className="fs-4">Категории</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <MyLink to= "/" class="nav-link text-white" name = "Все категории" />
                </li>
                <li>
                    { data.map((el: ICategory, index) => <MyLink to= { "product/Category/" + el.title + "/" + el.pk + "/" } class="nav-link text-white" name = { (index + 1) + ")  " + el.title} key={index} />) }
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Пользователь</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><MyLink name = "Создать продукт" class="dropdown-item" to = "/product/add" /></li>
                    <li><MyLink name = "Дополнительное" class="dropdown-item" to = "/additional" /></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;