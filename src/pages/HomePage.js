import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Services,FeaturedProducts,Contact,Hero } from '.'
const HomePage = () => {
  const data= useProductsContext()
  console.log(data)
  return (
   <main>
    < Hero/>
    < FeaturedProducts/>
    < Services/>
    < Contact/>
   </main>
  )
}

export default HomePage