import React, { useState, useEffect } from "react";
import axios from "axios";

// css
import css from './AddVolute.module.scss';
//

// util
import { API_BACKEND } from "../../../../util/config";
//

// components 
import MyLink from "../../../../components/Mylink/Link";
//

// interface
import { IForm } from "../../../../redux/Interface";
//

const AddVolute: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/allVolute/add`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className= {css.AddVolute}>
            <h1 id = "github">Добавить Валюту</h1>
            <form action={`${API_BACKEND}/api/allVolute/add`} className={"card bg-dark p-5 gap-2 " + css.card} encType="multipart/form-data" method="post">
                { data.map((el: IForm, index) => <div key={index} dangerouslySetInnerHTML={{ __html: el.form }} />)}
                <div className="card-body gap-2 d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-success">Добавить</button>
                    <MyLink to = "/additional" name = "Назад" class = "btn btn-primary" />
                </div>
            </form>
        </main>
    )
} 

export default AddVolute;