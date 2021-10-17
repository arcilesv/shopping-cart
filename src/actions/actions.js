import { types } from '../types/types';

export const addToCart = payload => ({
    type: types.ADD_TO_CART,
    payload
});

export const removeItem = payload => ({
    type: types.REMOVE_ITEM,
    payload
})

export const cleanCart = payload => ({
    type: types.CLEAN_CART,
    payload
})

export const toggleWishList = payload => ({
    type: types.TOGGLE_WISH_LIST,
    payload
})