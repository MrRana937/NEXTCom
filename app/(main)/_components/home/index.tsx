import React from 'react'
import './index.css'
import Carousel from '@/app/components/ui/Carousel'
const Home = () => {

  const navItems = [
    {
      label: 'Grocery',
      link: '/grocery-supermart-store',
      imgSrc:
        'https://rukminim2.flixcart.com/flap/90/90/image/29327f40e9c4d26b.png?q=100',
      alt: 'Grocery',
    },
    {
      label: 'Mobiles',
      link: '/mobile-phones-store',
      imgSrc:
        'https://rukminim2.flixcart.com/flap/90/90/image/22fddf3c7da4c4f4.png?q=100',
      alt: 'Mobiles',
    },
    {
      label: 'Fashion',
      link: '#',
      imgSrc:
        'https://rukminim2.flixcart.com/fk-p-flap/90/90/image/0d75b34f7d8fbcb3.png?q=100',
      alt: 'Fashion',
    },
    {
      label: 'Electronics',
      link: '#',
      imgSrc:
        'https://rukminim2.flixcart.com/flap/90/90/image/69c6589653afdb9a.png?q=100',
      alt: 'Electronics',
    },
    {
      label: 'Home & Furniture',
      link: '#',
      imgSrc:
        'https://rukminim2.flixcart.com/flap/90/90/image/ab7e2b022a4587dd.jpg?q=100',
      alt: 'Home & Furniture',
    },
    {
      label: 'Appliances',
      link: '/tvs-and-appliances-new-clp-store',
      imgSrc:
        'https://rukminim2.flixcart.com/fk-p-flap/90/90/image/0139228b2f7eb413.jpg?q=100',
      alt: 'Appliances',
    },
    {
      label: 'Flight Bookings',
      link: '/travel/flights',
      imgSrc:
        'https://rukminim2.flixcart.com/flap/90/90/image/71050627a56b4693.png?q=100',
      alt: 'Flight Bookings',
    },
    {
      label: 'Beauty, Toys & More',
      link: '#',
      imgSrc:
        'https://rukminim2.flixcart.com/flap/90/90/image/dff3f7adcf3a90c6.png?q=100',
      alt: 'Beauty, Toys & More',
    },
    {
      label: 'Two Wheelers',
      link: '#',
      imgSrc:
        'https://rukminim2.flixcart.com/fk-p-flap/90/90/image/05d708653beff580.png?q=100',
      alt: 'Two Wheelers',
    },
  ]

  return (
    <div className="home min-h-[calc(100vh-64px)] bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="home-container max-w-[1800px] mx-auto bg-white-500  p-2 font-jakarta text-[1.24rem] font-medium tracking-wide">
        <div className="home-header">
          <div className="flex flex-wrap justify-around bg-white  h-full space-y-4 md:space-y-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] rounded-sm">
            {navItems.map((item) => (
              <a
                href={item.link}
                key={item.label}
                className="flex flex-col items-center h-full w-1/2 md:w-1/4 lg:w-1/12 p-2  rounded-md"
                aria-label={item.label}
              >
                <div className="w-[5rem] h-[5rem]  flex items-center justify-center overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-2 text-lg text-black text-center whitespace-nowrap overflow-hidden ">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="home-swiper shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] rounded-sm">
          <Carousel multiItem={false} />
        </div>
        {/* <div className="home-menu">menu</div> */}
        <div className="home-offers flex w-full gap-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] rounded-sm">
          <div className="w-[60%] translate-x-[65%]">
            <div className="py-2 ">
              <Carousel multiItem={true} />
            </div>
          </div>
        </div>
        {/* <div className="home-user">user</div> */}
      </div>
    </div>
  )
}

export default Home
