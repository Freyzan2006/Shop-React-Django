import React from "react";

// components
import MyLink from "../Mylink/Link";
//

// util
import { API_BACKEND } from "../../util/config";
//

// interface 
import { IVolute } from "../../redux/Interface";
//

interface IProps {
    props: object
    count: number
}

const VoluteComponent: React.FC<IProps> = (props) => {
    const { pk, name } = props.props as IVolute;

    return (
        <div className="alert alert-success d-flex justify-content-around align-items-center flex-wrap">
            <p className="border border-info-subtle p-2 rounded">{ props.count + 1 }</p>
            <h3>{ name }</h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
                <MyLink to = {`/additional/allVolute/${name}/${pk}/edit`} name = "Изминить" class="btn btn-warning" />
                
                <form action= {`${API_BACKEND}/api/allVolute/${pk}/delete`} method="post">
                    <button type="submit" className="btn btn-danger">Удалить</button>
                </form>   
            </div>
        </div>
    )
}

export default VoluteComponent;