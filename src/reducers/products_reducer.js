import React from "react";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return (state = { ...state, isSidebarOpen: true });
  }
  if (action.type === SIDEBAR_CLOSE) {
    return (state = { ...state, isSidebarOpen: false });
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return (state = { ...state, products_loading: true });
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
      const featured_products=action.payload.filter((product)=>{return product.featured===true})
    return (state = {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products
    });
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return (state = {
      ...state,
      products_loading: false,
      products_error: true,
    });
  }
  return state;
};

export default products_reducer;
