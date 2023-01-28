import React, {useEffect} from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import {Box, styled} from "@mui/material"
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
    padding: 10px 10px;
    background: #f2f2f2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
        <Navbar />
        <Component>
            <Banner />
            <MidSlide products={products} title="Deals of the Day" timer={true} />
            <MidSection />
            <Slide products={products} title="Discounts for You" timer={false} slideImg="" />
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Top Selections" timer={false}/>
            <Slide products={products} title="Trending offers" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
        </Component>
        
    </>
  )
}

export default Home