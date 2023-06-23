import * as actionTypes from "../actionTypes";
import INITIAL_STATE from "./initialState";

export default function CartReducer(state = INITIAL_STATE.cart, action: Action){
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    case actionTypes.GET_PRODUCTS_ERROR:
      return { ...state, products: [], productsError: action.payload };
    case actionTypes.ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload[0]]}
    case actionTypes.REMOVE_PRODUCT:
      const filteredProducts = state.products.filter(
        (product: CartItem) => product.id !== action.payload.id
      );
      const deductCartLength = state.cartLength - action.payload.quantity;
      return {
        ...state,
        products: filteredProducts,
        cartLength: deductCartLength,
        productsError: '',
      };
    case actionTypes.UPDATE_QUANTITY:
      const updatedProduct = state.products.map((product:CartItem) => {
        if(product.id === action.payload.id){
          product.quantity += action.payload.quantity;
        }
        return product;
      });
      const updatedCartLength = state.cartLength + action.payload.quantity;
      return {...state, products: updatedProduct, cartLength: updatedCartLength};
    default:
      return state;
  }
}