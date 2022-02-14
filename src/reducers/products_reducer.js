import React from 'react'
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions'

const products_reducer = (state,action) => {
    if(action.type===SIDEBAR_OPEN){
        return state={...state,isSidebarOpen:true}
    }
    if(action.type===SIDEBAR_CLOSE){
        return state={...state,isSidebarOpen:false}
    }
  return state
    

}

export default products_reducer