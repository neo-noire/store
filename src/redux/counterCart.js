import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isOpen: false,
}

// const timeDelay = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

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
                    if (item.id === action.payload && item.ordered > 0) {
                        item.ordered = item.ordered - 1
                    }
                    // if(item.ordered === 0) {
                    //     let ind = index;
                    //     async function delFn(arg) {
                    //         await timeDelay(2000);
                    //         return state.items.splice(arg, 1);
                    //     };
                    //     delFn(ind)

                    // }
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