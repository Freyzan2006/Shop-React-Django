import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// icons 
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineTitle } from "react-icons/md";
//

// css
import css from "./Buy.module.scss";
//

// components
import MyLink from "../../components/Mylink/Link";
//

// interface 
import { IProduct } from "../../redux/Interface";
//

interface IUrlBuy {
    url_buy: string
}

const Buy: React.FC = () => {

    const { pk } = useParams<string>();

    const [data, setData] = useState([]);
    const [ url_buy, setUrlBuy ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product/${pk}/`);
                setData(response.data);
                
                const urlBuy = await axios.get(`http://127.0.0.1:8000/api/product/${pk}/buy/`)
                setUrlBuy(urlBuy.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [pk]);

  
   



    return (
        <main className = { 'container ' + css.Buy }>
            <h1 id = "github">Вы хотите купить ?</h1>
            

            { data.map((date: IProduct, index) => 
                <div className="Products__item card text-bg-dark mb-3" key={index}>
                    <div className="card-header">
                        <img src= { date.photo } alt="" className={"img-thumbnail " + css.card_img} />
                        <h2>Название: { date.name } <MdOutlineTitle /></h2>
                    </div>
                    <div className="card-body">
                        <p>Цена: { date.price } { date.moneytype } <FaMoneyCheckAlt /></p>
                    </div>
                    <div className="card-footer d-flex gap-5">
                        <a href = { `${url_buy.map((el:IUrlBuy) => el.url_buy)}` } target="_blank" className="btn btn-success">ДА</a>
                        <MyLink to = {`/`} name = "Нет" class = "btn btn-danger" />
                    </div>
                </div>
            ) }
            
        </main>
    )
}

export default Buy;