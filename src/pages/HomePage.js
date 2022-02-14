import React from 'react'
import { useProductsContext } from '../context/products_context'

const HomePage = () => {
  const data= useProductsContext()
  console.log(data)
  return (
    <h2>HomePage</h2>
  )
}

export default HomePage