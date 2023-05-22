import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import AddProduct from './AddProduct';
import ProductsTable from '../components/ProductsTable/ProductsTable';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySellerAction } from '../actions/productActions';

function SellerProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const [addProductClicked, setaddProductClicked] = useState(false);

  const onAddProductClick = () => {
    setaddProductClicked(!addProductClicked);
  }

  useEffect(() => {
    const id = localStorage.getItem('id');
    dispatch(getProductsBySellerAction(id));
  }, [])
  

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <div>
        <ProductsTable products={products} />
      </div> 
      <br /> <br />
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