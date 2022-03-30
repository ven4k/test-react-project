const ADD_API_ITEMS = 'ADD_API_ITEMS';
const FILTER_API_ITEMS ='FILTER_API_ITEMS';

const initialState = {
    catalog: [],
    filteredCatalog: ''
}

export const customReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_API_ITEMS:
            return {...state, catalog: action.payload}
        case FILTER_API_ITEMS:
            return {...state, filteredCatalog: `${action.payload}`}
        default:
            return state;
    }
}

export const addApiItemsAC = (payload) => ({type: ADD_API_ITEMS, payload});
export const filterApiItemsAC = (payload) => ({type: FILTER_API_ITEMS, payload});