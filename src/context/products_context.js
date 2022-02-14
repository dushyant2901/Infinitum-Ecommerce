import React, { useContext, useReducer } from "react";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
import reducer from '../reducers/products_reducer'
const ProductsContext = React.createContext();
const initialstate = {
    isSidebarOpen:false
};
export const ProductsProvider = ({ children }) => {

const openSidebar=()=>{
dispatch({type:SIDEBAR_OPEN})
}
const closeSidebar=()=>{
    console.log('first')
dispatch({type:SIDEBAR_CLOSE})
}



    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <ProductsContext.Provider value={{...state,openSidebar,closeSidebar}}>{children}</ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    return useContext(ProductsContext);
};
