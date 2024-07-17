import React from 'react';
import Navbar from './../components/Home/Navbar';
import Hero from './../components/Home/Hero';
import GridSection from '../components/Home/GridSection';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GridSection />
      <Banner />
      <ProductList/>
    </div>
  );
}

export default Home;
