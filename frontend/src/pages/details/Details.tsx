import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// componetns 
import ProductDetails from "../../components/productDetails/productDetails";
//

// css
import css from "./Details.module.scss";
//

const Details: React.FC = () => {
    const { pk } = useParams<string>();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product/${pk}/`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [pk]);

    return (
        <main className= {css.Details}>
          
          <h1 id="apple">Подробние</h1>
            



            { data.length ? data.map((date, id) => 
                <ProductDetails props = { date } key={ id } />
            ) : <h2>Данных нету</h2>}
        </main>
    )
}

export default Details;