import React from "react";


// icons 
import { FaMoneyCheckAlt } from "react-icons/fa";
import { ImListNumbered } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { HiTemplate } from "react-icons/hi";
import { MdCreate, MdOutlineTitle, MdUpdate } from "react-icons/md";
//

// components 
import MyLink from "../Mylink/Link";
//

// css
import css from './productDetails.module.scss';
//

// interface IData {
//     pk: number
//     name: string 
//     price: number
//     photo: string
//     about: string
//     amount: number
//     isHave: boolean
//     created_at: string
//     updated_at: string
//     moneytype: string
//     category: string
// }

// interface 
import { IProduct } from "../../redux/Interface";
//


interface IProps {
    props: object
}

const ProductDetails: React.FC<IProps> = (props) => {

    const { pk ,name, price, photo , about, amount, isHave, created_at, updated_at, moneytype ,category } = props.props as IProduct;

    
    const str_created_at = new Date(created_at).toLocaleString()
    const str_updated_at = new Date(updated_at).toLocaleString();


   
    return (
        <main>
            <div className="Products__item card text-bg-dark mb-3" key={pk}>
                <div className="card-header">
                    <img src= { photo } alt="" className={"img-thumbnail " + css.card_img} />
                    <h2>Название: { name } <MdOutlineTitle /></h2>
                </div>
                <div className="card-body">
                    <p>Цена: { price } { moneytype } <FaMoneyCheckAlt /></p>
                    <p>Кол-во: { amount } <ImListNumbered /></p>
                    <p>Описание: { about } <FcAbout /></p>
                    <p>В наличии: { isHave ? "Да" : "Нет" } <HiTemplate /></p>
                    <p>Категория: { category }</p>
                    <div className="card-body d-flex gap-5">
                        <MyLink to = {`/product/${pk}/buy`} name = "Купить" class="btn btn-success" />
                        <MyLink to = {`/`} name = "Назад" class = "btn btn-primary" />
                    </div>
                    <div className="card-body d-flex gap-5">
                        <MyLink to = {`/product/${pk}/${name}/edit`} name = "Изминить" class="btn btn-warning" />
                        <MyLink to = {`/product/${pk}/${name}/delete`} name = "Удалить" class = "btn btn-danger" />
                    </div>
                </div>
                <div className="card-footer">
                    <p>Создано:{ str_created_at } <MdCreate /></p>
                    <p>Обновлено: { str_updated_at } <MdUpdate /></p>
                </div>
            </div>
        </main>
    )
}

export default ProductDetails;