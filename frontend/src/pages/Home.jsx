import React , {useEffect} from 'react';
import Navbar from './../components/Home/Navbar';
import Hero from './../components/Home/Hero';
import GridSection from '../components/Home/GridSection';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  })
  return (
    <div>
    
      <Hero />
      <GridSection />
      <Banner />
      <ProductList/>
    </div>
  );
}

export default Home;
