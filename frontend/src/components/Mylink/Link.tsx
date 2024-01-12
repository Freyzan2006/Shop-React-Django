import React from "react";

import { NavLink } from "react-router-dom";


import css from './Link.module.scss';


interface IProps {
    to: string
    name: string
    class?: string
    icon?: React.ReactNode
}

const MyLink: React.FC<IProps> = (props) => {
    return (
        <NavLink to = { props.to } className = {`${props.class} ${css.MyLink}` } >{ props.name } {props.icon} </NavLink>
    )
}

export default MyLink;