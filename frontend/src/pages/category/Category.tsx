import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// components 
import ProductCard from "../../components/productCard/productCard";
//

// css
import css from "./Category.module.scss";
//

const Category: React.FC = () => {
    const { category_id, title } = useParams<string>();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/category/${category_id}`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [category_id]);
    
    

    return (
        <main className = { css.Category }>
            <h3 id = "twitter">Категория ' { title } '</h3>

            { data.length ? data.map((date, id) => 
                <ProductCard props = { date } key={id} />
            ) : <h2>Данных нету</h2>}

        </main>
    )
} 

export default Category;