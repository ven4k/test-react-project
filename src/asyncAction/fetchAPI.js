import {addApiItemsAC} from "../redux/customReducer";

export const fetchAPI = () => {
    return (dispatch) => {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
                .then((res) => res.json())
                .then(result => dispatch(addApiItemsAC(result.drinks)))
        }
}