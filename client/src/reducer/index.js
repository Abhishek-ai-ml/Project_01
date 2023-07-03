import {combineReducers} from '@reduxjs/toolkit'
import clientReducer from '../slices/clientSlice'
import orderReducer from '../slices/orderSlice'


const rootReducer = combineReducers({
    client:clientReducer,
    order:orderReducer,
})

export default rootReducer