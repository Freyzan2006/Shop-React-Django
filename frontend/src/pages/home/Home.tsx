import React, { useEffect, useState } from "react";
import axios from "axios";

// css
import css from './Home.module.scss';
//

// components 
import ProductCard from '../../components/productCard/productCard';
import NavPage from "../../components/navPage/NavPage";
//


const Home: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    

    return (
        <main className= {css.Home}>
            <div className={"container " + css.Home} >
                <h3 className= {css.h1} id = "twitter">Главная страница</h3>
                <div className="Products">

                    { data.length ? data.map((date, id) => 
                        <ProductCard props = { date } key={id} />
                    ) : <h2>Данных нету</h2>}

                </div>

                <NavPage />
            </div>
        </main>
    )
}

// { name, price, about, amount, isHave, created_at, updated_at }

export default Home;