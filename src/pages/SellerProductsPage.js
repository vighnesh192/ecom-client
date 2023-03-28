import React, { useState } from 'react'
import Button from '../components/Button/Button'
import AddProduct from './AddProduct';

function SellerProductsPage() {
  const [addProductClicked, setaddProductClicked] = useState(false);

  const onAddProductClick = () => {
    setaddProductClicked(!addProductClicked);
  }

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <div>
        SellerProducts Table
      </div> 
      <div>
        <Button action="Add Product" onSubmit={onAddProductClick} />
      </div>
      {
        addProductClicked ? 
        <AddProduct /> : <></>
      }
    </div>
  )
}

export default SellerProductsPage