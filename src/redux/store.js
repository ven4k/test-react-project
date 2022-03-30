import {customReducer} from './customReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
   customReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))