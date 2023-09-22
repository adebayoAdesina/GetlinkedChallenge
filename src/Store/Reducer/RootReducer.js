import {combineReducers} from 'redux'
import CategoriesReducer from './CategoriesReducer';
const RootReducer = combineReducers({
    isCategories: CategoriesReducer,
});

export default RootReducer;