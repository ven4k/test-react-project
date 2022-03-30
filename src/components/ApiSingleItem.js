import React, {useEffect, useState} from "react";
import style from '../components-css/ApiSingleItem.module.css';
import {useParams} from "react-router-dom";


const ApiSingleItem = () => {
    const {idDrink} = useParams();
    const [singlePost, setSinglePost] = useState([])
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?%20i=${idDrink}`)
            .then((res) => res.json())
            .then((result) => {
                setSinglePost(result.drinks)
            })

    }, [idDrink]);


    return (
        <div className={style.singleItemBoard}>
            {singlePost.map((item) => (
                <div className={style.singleItem} key={item.idDrink}>
                    <div className={style.imageBlock}><img src={item.strDrinkThumb}/></div>
                    <div className={style.textItems}>
                        <div className={style.itemName}>{item.strDrink}</div>
                        <span>Ingredients:</span>
                        <ul>
                            <li>{item.strIngredient1}</li>
                            <li>{item.strIngredient2}</li>
                            <li>{item.strIngredient3}</li>
                            <li>{item.strIngredient4}</li>
                        </ul>
                        <p className={style.instructions}>{item.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}


//Решил эту компоненту рендерить с помощью хука useState;

export default ApiSingleItem;