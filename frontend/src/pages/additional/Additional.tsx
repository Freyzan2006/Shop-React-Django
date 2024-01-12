import React from "react";

// css
import css from './Additional.module.scss';
//

// components
import MyLink from "../../components/Mylink/Link";
//

const Additional: React.FC = () => {
    return (
        <main className={"card bg-dark text-white " + css.Additional}>
            <div className={"card-header " + css.card}>
                <h1 id = "apple">Дополнительное</h1>
                <MyLink to = '/additional/allVolute/view' name = "Показать все 'Валюты'" class="btn btn-outline-info" />
                <MyLink to = '/additional/allCategory/view' name = "Показать все 'Категории'" class="btn btn-outline-info" />
            </div>
        </main>
    )
}

export default Additional;