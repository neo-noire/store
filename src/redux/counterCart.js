import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isOpen: false,
}

export const cartState = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },
        cartModal: (state) => {
            state.isOpen = !state.isOpen
        },
        incrOrderedInCart: (state, action) => {
            state = state.items
                .map((item) => item.id === action.payload ?
                    item.ordered = item.ordered + 1 : null
                )
        },
        minusFromCart: (state, action) => {
            state = state.items
                .map((item) => {
                    if (item.id === action.payload && item.ordered > 1) {
                        item.ordered = item.ordered - 1
                    }
                }
                )
        },
        removeFromCart: (state, action) => {
            state = state.items
                .map((item, index) => {
                    if (item.id === action.payload) {
                        state.items.splice(index, 1)
                    }
                })
        }

    }
})


export const {
    add,
    cartModal,
    incrOrderedInCart,
    minusFromCart,
    removeFromCart
} = cartState.actions;

export default cartState.reducer;