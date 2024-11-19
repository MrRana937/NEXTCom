import Link from "next/link"
import { useState } from "react";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
    
  const menuItems = [
    { icon: '👤', label: 'My Profile', href: '/profile' },
    { icon: '⭐', label: 'Plus Zone', href: '/plus-zone' },
    { icon: '📦', label: 'Orders', href: '/orders' },
    { icon: '❤️', label: 'Wishlist', href: '/wishlist' },
    { icon: '🎁', label: 'Rewards', href: '/rewards' },
    { icon: '💳', label: 'Gift Cards', href: '/gift-cards' },
  ];

 return (
   <div
     className="relative"
     onMouseEnter={() => setIsOpen(true)}
     onMouseLeave={() => setIsOpen(false)}
   >
     <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
       <RiAccountPinCircleLine className="nav-icon text-[1.5rem] text-blue-600" />
       <span className="nav-text text-[1.27rem] text-blue-600">Login</span>
       <RiArrowDropDownFill className="nav-icon text-[1.8rem] text-blue-600" />
     </button>

     {isOpen && (
       <div className="absolute right-0 top-full  w-72 bg-white rounded-lg shadow-lg z-50">
         {/* New Customer Section */}
         <div className="px-5 py-3">
           <p className="text-gray-500 text-[1.27rem]">New Customer?</p>
           <Link
             href="/signup"
             className="text-blue-600 font-semibold text-[1.27rem] hover:text-blue-700"
           >
             Sign Up
           </Link>
         </div>

         {/* Divider */}
         <div className="border-b border-gray-200 my-1"></div>

         {/* Menu Items */}
         <div className="py-2">
           {menuItems.map((item, index) => (
             <Link
               key={index}
               href={item.href}
               className="flex items-center px-5 py-2 hover:bg-gray-50 group"
             >
               <span className="mr-3 text-[1.5rem]">{item.icon}</span>
               <span className="text-[1.27rem] text-gray-700 ">
                 {item.label}
               </span>
             </Link>
           ))}
         </div>
       </div>
     )}
   </div>
 )
};