import React from "react"

import { Routes, Route } from "react-router-dom";

// pages 
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Buy from "../pages/buy/Buy";
import Category from "../pages/category/Category";
import AddProduct from "../pages/addProduct/AddProduct";
import DeleteProduct from "../pages/deleteProduct/DeleteProduct";
import EditProduct from "../pages/editProduct/EditProduct";
import Login from "../pages/login/Login";
import Reg from "../pages/reg/Reg";
import Additional from "../pages/additional/Additional";
import AllCategory from "../pages/additional/allCategory/AllCategory";
import AllVolute from "../pages/additional/allVolute/AllVolute";
import AddCategory from "../pages/additional/allCategory/addCategory/AddCategory";
import EditCategory from "../pages/additional/allCategory/editCategory/EditCategory";
import AddVolute from "../pages/additional/allVolute/addVolute/AddVolute";
import EditVolute from "../pages/additional/allVolute/editVolute/EditVolute";
//



const MyRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = '*' element = {<Home />} />
            <Route path = 'about/' element = {<About />} />
            <Route path = "product/:pk/details" element  = {<Details />} />
            <Route path = "product/:pk/buy" element = {<Buy />} />
            <Route path = "product/Category/:title/:category_id/" element = {<Category />} />
            <Route path = "/product/add" element = {<AddProduct />} />
            <Route path = "/product/:pk/:title/delete" element = { <DeleteProduct /> } />
            <Route path = "/product/:pk/:title/edit" element = { <EditProduct /> } />
            <Route path = "/login" element = { <Login /> } />
            <Route path = '/reg' element = { <Reg /> } />
            <Route path = "/additional/*" element = { <Additional /> } />

            <Route path = "/additional/allVolute/view" element = { <AllVolute /> } />
            <Route path = "/additional/allCategory/view" element = { <AllCategory /> } />
            <Route path="/additional/allCategory/add" element = { <AddCategory /> } />
            <Route path="/additional/allCategory/:name/:pk/add" element = { <AddCategory /> } />
            <Route path = "/additional/allCategory/:title/:pk/edit" element = { <EditCategory /> } />

            <Route path = "/additional/allVolute/add" element = { <AddVolute /> } />
            <Route path = "/additional/allVolute/:name/:pk/edit" element = { < EditVolute /> } />

        </Routes>
    )
}

export default MyRoute;