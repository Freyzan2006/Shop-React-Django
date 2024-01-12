import React from "react";

// componets
import MyLink from "../Mylink/Link";
//

// util
import { API_BACKEND } from "../../util/config";
//


// interface 
import { ICategory } from "../../redux/Interface";
//

interface IProps {
    props: object
    count: number
}

const CategoryComponent: React.FC<IProps> = (props) => {

    const { pk, title } = props.props as ICategory; 

    return (
        <div className="alert alert-success d-flex justify-content-around align-items-center flex-wrap">
            <p className="border border-info-subtle p-2 rounded">{ props.count + 1 }</p>
            <h3>{ title }</h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
                <MyLink to = {`/additional/allCategory/${title}/${pk}/edit`} name = "Изминить" class="btn btn-warning" />
                
                <form action= {`${API_BACKEND}/api/allCategory/${pk}/delete`} method="post">
                    <button type="submit" className="btn btn-danger">Удалить</button>
                </form>   
            </div>
        </div>
    )
}

export default CategoryComponent;