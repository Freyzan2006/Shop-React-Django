import React, { useEffect, useState } from "react";
import axios from "axios";

// util
import { API_BACKEND } from "../../util/config";
//

// interface 
import { IForm } from "../../redux/Interface";
//

const AddProduct: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`http://127.0.0.1:8000/api/product/add`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <main>
            <form className="card bg-dark p-5" method="post" action={`${API_BACKEND}/api/product/add`} encType="multipart/form-data">
                <h3 id = "facebook">Добавить продукт</h3>
                { data.map((el: IForm, index) => <div key={index} dangerouslySetInnerHTML={{ __html: el.form }} />)}
                <p className="text-white">В налиичи ?</p>
                <button type="submit" className="btn btn-outline-success mt-3">Добавить</button>
            </form>    
        </main>
    )
}

export default AddProduct;