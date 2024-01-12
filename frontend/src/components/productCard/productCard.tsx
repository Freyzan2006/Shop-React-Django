import React from "react";

// icons 
import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { MdOutlineTitle } from "react-icons/md";
//


import MyLink from "../Mylink/Link";
import css from './productCard.module.scss';

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


const Product: React.FC<IProps> = ( props ) => {

    const { pk ,name, price, photo, isHave, moneytype, category } = props.props as IProduct;

    


    return (
        <div className="card text-bg-dark mb-3 Products__item">
            <div className="card-header">
                <img src= { `${photo}` } alt="" className={"img-thumbnail " + css.card_img} />
                <h2>Название: { name } <MdOutlineTitle /></h2>
            </div>
            <div className="card-body">
                <p>Цена: { price } { moneytype } <FaMoneyCheckAlt /></p>
                <p>В наличии: { isHave ? "Да" : "Нет" } <HiTemplate /></p>
                <p>Категория: { category }</p>
            </div>
            <div className="card-footer">
                <div className="card-body d-flex gap-5">
                    <MyLink to = {`/product/${pk}/buy`} name = "Купить" class="btn btn-success" />
                    <MyLink to = {`/product/${pk}/details`} name = "Подробние..." class = "btn btn-info" />
                </div>
            </div>
        </div>
    )
}

export default Product;