import {combineReducers} from 'redux';
import amountReducer from './amountReducer';
//combine multiple reducers
const reducers = combineReducers({
    amount: amountReducer
})

export default reducers
