import React, { useContext, useReducer,useEffect } from "react";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN ,GET_PRODUCTS_BEGIN,GET_PRODUCTS_ERROR,GET_PRODUCTS_SUCCESS} from "../actions";
import {products_url as url} from "../utils/constants"
import reducer from "../reducers/products_reducer";
const ProductsContext = React.createContext();
const initialstate = {
  isSidebarOpen: false,
  featured_products:[],
  products:[],
  products_loading:false,
  products_error:false

};
export const ProductsProvider = ({ children }) => {
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    console.log("first");
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts=async(url)=>{
      dispatch({action:GET_PRODUCTS_BEGIN})
      try {
          
          const response = await axios.get(url)
          const data = await response.data
          dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
      } catch (error) {
          dispatch({type:GET_PRODUCTS_ERROR})
      }
  }

  useEffect(() => {

    fetchProducts(url)
  
   
  }, [])
  

  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
