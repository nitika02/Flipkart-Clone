import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import "./Product.css"
import ProductItem from './ProductItem'

const Product = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.getProducts)
    
    useEffect(() => {
        dispatch(getProducts())
        console.log(products)
    }, [])

  return (
    <div>
        <div className='top-navbar'>
            <h4>Electronics</h4>
            <h4>TVs & Appliances</h4>
            <h4>Men</h4>
            <h4>Women</h4>
            <h4>Baby & Kids</h4>
            <h4>Home & Furniture</h4>
            <h4>Sports, Books & More</h4>
            <h4>Flights</h4>
            <h4>Offer Zone</h4>
            <h4>Grocery</h4>
        </div>
        <div className='product-grid'>
            {products.map((item) => {
                return (
                    <ProductItem item={item} />
                )
            })}
        </div>
    </div>
  )
}

export default Product