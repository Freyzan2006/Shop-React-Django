import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import MyLink from "../../../components/Mylink/Link";
import VoluteComponent from "../../../components/voluteComponent/VoluteComponent";
//

// css
import css from './AllVolute.module.scss';
//

// interface
import { IVolute } from "../../../redux/Interface";
//


const AllVolute: React.FC = () => {
 

    const [data, setData] = useState([]);

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/volute/get`);
                    
                    setData(response.data);
               
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <main className= {css.AllVolute}>
            <h1 id = "facebook">Все Влалюты</h1>
            
            <div className={"card bg-dark text-white p-3 " + css.card} >
                <div className="card-header d-flex gap-2 justify-content-center align-items-center">
                    <MyLink to = {`/additional/allVolute/add`} name = "Добавить" class="btn btn-success" />
                    <MyLink to = "/additional" name = "Назад" class="btn btn-primary" />
                </div>
                <div className="card-body">
                    { data.length ? data.map((el: IVolute, index) => <VoluteComponent key={index} props = { el } count = { index } />) : <h2>Нету Волют</h2> }
                </div>
            </div>

            
            
            
        </main>
    )
}

export default AllVolute;