import React from 'react'
import './index.css'
import Carousel from '@/app/components/ui/Carousel'
const Home = () => {
  return (
    <div className="home min-h-[calc(100vh-64px)]">
      <div className="home-container max-w-[1600px] mx-auto bg-white-500  p-7">
        <div className="home-header">header</div>
        <div className="home-swiper">
         <Carousel/>
        </div>
        <div className="home-menu">menu</div>
        <div className="home-offers">offers</div>
        <div className="home-user">user</div>
      </div>
    </div>
  )
}

export default Home
