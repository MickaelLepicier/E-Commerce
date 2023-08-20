import productsReducer from './productsReducer';
import customersReducer from './customersReducer';
import purchasesReducer from './purchasesReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productsReducer,
    customers: customersReducer,
    purchases: purchasesReducer,
});

export default rootReducer;
