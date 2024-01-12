import React from "react";


const NavPage: React.FC = () => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination" id = "apple">
                <li className="page-item"><a className="page-link" href="#">Назад</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Вперёд</a></li>
            </ul>
        </nav>
    )
}

export default NavPage;