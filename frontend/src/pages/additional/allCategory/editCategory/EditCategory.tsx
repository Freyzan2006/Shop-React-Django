import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// util
import { API_BACKEND } from "../../../../util/config";
//

// components
import MyLink from "../../../../components/Mylink/Link";
//

// css
import css from "./EditCategory.module.scss";
//

// interface
import { IForm } from "../../../../redux/Interface";
//

const EditCategory: React.FC = () => {

    const { pk, title } = useParams<string>();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`${API_BACKEND}/api/allCategory/${pk}/edit`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [pk]);

    return (
        <main className= { css.EditCategory }>
            <h1 id = "apple">Изминить '{ title }'</h1>

            <form action= {`${API_BACKEND}/api/allCategory/${pk}/edit`} method="post" className={"card bg-dark p-3 gap-3 " + css.card}>
                { data.map((el: IForm, index) => <div key={index} dangerouslySetInnerHTML={ { __html: el.form  }} />)}
                <div className="card-body d-flex justify-content-center align-items-center gap-4">
                    <button type="submit" className="btn btn-warning">Изминить</button>
                    <MyLink to = "/addotional/allCategory" class="btn btn-primary" name = "Назад" />
                </div>
            </form> 
            
        </main>
    )
} 

export default EditCategory;