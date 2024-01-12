import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import MyLink from "../../../components/Mylink/Link";
import CategoryComponent from "../../../components/categoryComponent/CategoryComponent";
//

// css
import css from './AllCategory.module.scss';
//

// interface
import { ICategory } from "../../../redux/Interface";
//

const AllCategory: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                    
                const response = await axios.get(`http://127.0.0.1:8000/api/category/get`);
                
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className= {css.AllCategory}>
            <h1 id = "facebook">Все Категории</h1>
                  
            <div className={"card bg-dark text-white p-3 " + css.card} >
                <div className="card-header d-flex gap-2 justify-content-center align-items-center">
                    <MyLink to = "/additional/allCategory/add" name = "Добавить" class="btn btn-success" />
                    <MyLink to = "/additional" name = "Назад" class="btn btn-primary" />
                </div>
                <div className="card-body">
                    { data.map((el: ICategory, index) => <CategoryComponent key={index} props = { el } count = { index } />) }
                </div>
            </div>
        </main>
    )
}

export default AllCategory;