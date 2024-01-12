import React, { useEffect, useState } from "react";
import axios from "axios";
import MyLink from "../../components/Mylink/Link";

import css from './Login.module.scss';
import { API_BACKEND } from "../../util/config";

// interface 
import { IForm } from "../../redux/Interface";
//



const Login: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/users/api/login/');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <main className= { css.Main }>
            <h1 id = "facebook">Вход</h1>
            <form className="card bg-dark p-5 gap-4" method="post" action = {`${API_BACKEND}/users/api/login/`}>
                { data.map((el: IForm, index) => <div key={index} dangerouslySetInnerHTML={{ __html: el.form }} />)}
                <button type="submit" className="btn btn-success">Войти</button>
                <MyLink to = "/" name = "Назад" class="btn btn-primary" />
            </form>

        </main>
    )
}

export default Login;