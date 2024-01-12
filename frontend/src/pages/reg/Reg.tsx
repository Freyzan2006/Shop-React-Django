import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import MyLink from "../../components/Mylink/Link";
//

// css
import css from './Reg.module.scss';
//

// util
import { API_BACKEND } from "../../util/config";
//

// interface
import { IForm } from "../../redux/Interface";
//

const Reg: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/users/api/register/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <main className= { css.Main }>
            <h1 id = "facebook">Регистрация</h1>
            <form className="card bg-dark p-5 gap-4 text-white" method="post" action = {`${API_BACKEND}/users/api/register/`} encType="multipart/form-data">
                { data.map((el: IForm, index) => <div key={index} dangerouslySetInnerHTML={{ __html: el.form }} />)}
                <button type="submit" className="btn btn-success">Зарегистрироватся</button>
                <MyLink to = "/" name = "Назад" class="btn btn-primary" />
            </form>

        </main>
    )
}

export default Reg;