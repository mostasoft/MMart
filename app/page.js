import React from 'react'
import HeroBanner from './home/HeroBanner'
import ProductCarousel from './home/ProductCarosel';
import ProductCard from './home/ShopSection';
import SignInBanner from './home/LoginAd';
import PromotionalGrid from './home/PromotionalGrid';
import CategoryCarousel from './home/Category';
import DealsColumnCarousel from './home/DealCarosel';
import CozyStylesRow from './home/productCarosel2';
import PopularInCategoryCarousel from './home/PopularInCategoryCarousel';
import TrendingSocialCarousel from './home/TrendingSocialCarousel';
import UtilityBar from './home/UtilityBar';


const page = () => {
  return (
    <div className=''>
      <HeroBanner/>
      <ProductCard/>
      <ProductCarousel/>
      <SignInBanner/>
      <PromotionalGrid/>
      <CategoryCarousel/>
      <DealsColumnCarousel/>
      <CozyStylesRow/>
      <PopularInCategoryCarousel/>
      <TrendingSocialCarousel/>
      <UtilityBar/>
    </div>
  )
}

export default page
