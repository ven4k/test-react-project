import React, {useState, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";
import ApiSingleItem from "./ApiSingleItem";
import style from "../components-css/ApiCatalog.module.css";
import {useDispatch, useSelector} from "react-redux";
import {filterApiItemsAC} from "../redux/customReducer";
import {fetchAPI} from "../asyncAction/fetchAPI";


const ApiCatalog = () => {
    const dispatch = useDispatch();
    const catalog = useSelector(state => state.customReducer.catalog);
    const filteredCatalog = useSelector(state => state.customReducer.filteredCatalog)
    const newCatalog = catalog.filter(el => el.strDrink.toLowerCase().includes(filteredCatalog.toLowerCase()))

    useEffect(() => {
        dispatch(fetchAPI())
    }, [])


    return (
        <Routes>
            <Route path="/apicatalog" element={
                <div className={style.apiSearch}>
                    <div className={style.searchInput}>
                        <p>Search Coctail</p>
                        <input type="text" placeholder="Search a cocktail"
                               onChange={(event) => dispatch(filterApiItemsAC(event.target.value))}/>
                    </div>
                    <div>
                    </div>
                    <div className={style.ApiPage}>
                        {newCatalog.map((item) => (
                            <Link to={`/apicatalog/${item.idDrink}`} key={item.idDrink}>
                                <div className={style.apiItem}>
                                    <img src={item.strDrinkThumb} id={item.idDrink}/>
                                    <p>{item.strDrink}</p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>

            }/>
            <Route path={`/apicatalog/:idDrink`} element={<ApiSingleItem/>}/>
        </Routes>

    );
}

export default ApiCatalog;
