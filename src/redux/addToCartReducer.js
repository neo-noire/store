export const addToCart = (state, action) => ({
    ...state,
    items: action.payload,
  })