import React from 'react'
import './index.css'
import Carousel from '@/app/components/ui/Carousel'
const Home = () => {
  return (
    <div className="home min-h-[calc(100vh-64px)]">
      <div className="home-container max-w-[1700px] mx-auto bg-white-500  p-7">
        <div className="home-header">header</div>
        <div className="home-swiper">
          <Carousel multiItem={false} />
        </div>
        <div className="home-menu">menu</div>
        <div className="home-offers flex w-full gap-4">
          <div className="w-[60%] translate-x-[65%]">
            <div className="py-2 ">
              <Carousel multiItem={true} />
            </div>
          </div>
        </div>
        <div className="home-user">user</div>
      </div>
    </div>
  )
}

export default Home
