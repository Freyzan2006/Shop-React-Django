import React, { useEffect, useState } from "react";
import axios from "axios";

// css
import css from "./Search.module.scss";
// 

// components 
import MyLink from "../Mylink/Link";
//

// interface 
import { IProduct } from "../../redux/Interface";
//

const Search: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const [searchArr, setSearchArr] = useState([]);
    
    const SearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;   
        const search__info = data.filter((el: IProduct) => el.name.includes(input) ) 
        
        input.length ? setSearchArr(search__info) : setSearchArr([]);
    }
    
    return (
        <form className={"d-flex " + css.Search}>
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" name = "name" onChange={ SearchOnChange } />
            <ul className={css.Search__info}>
                { searchArr.map((el: IProduct, index) => <li key={index}><MyLink to = { `/product/${el.pk}/details` } name = { el.name }  class= { "btn btn-dark " + css.Search__link} /></li> )}
            </ul>
        </form>
    )
}

export default Search;