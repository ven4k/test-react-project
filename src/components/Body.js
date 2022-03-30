import React from "react";
import style from "../components-css/Body.module.css";
import ApiCatalog from "./ApiCatalog";
import AboutUs from "./AboutUs";
import {Route, Routes} from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";


const Body = () => {
    return (
        <div className={style.bodyPage}>
            <Routes>
                <Route path='/' element={<AboutUs/>}/>
                <Route path='*' element={<ApiCatalog/>}/>
                <Route path='/registration' element={<RegistrationForm />}/>
            </Routes>
        </div>
    )
}
export default Body;
