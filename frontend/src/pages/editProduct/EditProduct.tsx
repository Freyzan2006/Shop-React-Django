import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// util
import { API_BACKEND } from "../../util/config";
//

// css
import css from "./EditProduct.module.scss";
//

interface IData {
    form: string
    img: string
}

const EditProduct: React.FC = () => {
    const { pk, title } = useParams<string>()
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`${API_BACKEND}/api/product/${pk}/edit`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [ pk ]);

    return (
        <main>
            <form className="card bg-dark p-5" method="post" action={`${API_BACKEND}/api/product/${pk}/edit`} encType="multipart/form-data">
                <h3 id = "facebook">Изминить продукт '{ title }'</h3>
                { data.map((el: IData, index) => <img key={index} className= {"mt-2 " + css.image} src = { el.img } alt = "Img" />)}
                { data.map((el: IData, index) => <div key={index} dangerouslySetInnerHTML={ { __html: el.form  }} />)}
                <p className="text-white">В налиичи ?</p>
                <button type="submit" className="btn btn-outline-warning mt-3">Изминить</button>
            </form>    
        </main>
    )
}

export default EditProduct;