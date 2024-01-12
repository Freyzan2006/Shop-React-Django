import React from "react";
import { useParams } from "react-router-dom";

// util
import { API_BACKEND } from "../../util/config";
import MyLink from "../../components/Mylink/Link";
//

const DeleteProduct: React.FC = () => {
    const { pk, title } = useParams<string>()
    return (
        <main>
            <div className="card bg-dark p-5 d-flex flex-column gap-5">
                <h3 id = "facebook">Удалить '{ title }' ?</h3>

                <form action={`${API_BACKEND}/api/product/${pk}/delete`} method="post" className="d-flex flex-row justify-content-center gap-5">
                    <button type = "submit" className="btn btn-danger">ДА</button>
                    <MyLink to = {`/product/${pk}/details`} name = "Назад" class="btn btn-success" />
                </form>
            </div>
        </main>
    )
}

export default DeleteProduct;