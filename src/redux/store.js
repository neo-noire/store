import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './counterCart';

export default configureStore({
    reducer: {
        addToCart: cartSliceReducer,
    },
})