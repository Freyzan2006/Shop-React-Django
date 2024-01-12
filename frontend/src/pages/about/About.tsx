import React from "react";

// css 
import css from "./About.module.scss";
//

const About: React.FC = () => {
    return (
        <main className = {css.About}>
            <div className="card bg-dark p-4 d-flex flex-column gap-3">
                <h3 id = "twitter">О нас</h3>
                <p className="alert alert-success">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Est atque necessitatibus quibusdam 
                    possimus quod recusandae vel corrupti nostrum assumenda 
                    asperiores? Quasi reiciendis adipisci obcaecati vitae! 
                    Rerum sit cumque dolorum in.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas adipisci nesciunt aspernatur provident distinctio reiciendis 
                    ipsa totam voluptas aperiam eaque, iure quibusdam numquam beatae 
                    tempora veritatis possimus animi non sed?
                </p>
            </div>
        </main>
    )
}

export default About;