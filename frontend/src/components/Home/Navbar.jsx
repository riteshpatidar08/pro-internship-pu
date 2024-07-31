import React from 'react';
import logo from '../../assets/logo1.png';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GoHeart } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Navitems from './Navitems';
import { NavData } from './data';
import { useSelector } from 'react-redux';
function Navbar() {
  const {totalQuantity} = useSelector((state)=>state.cart)
  return (
    <header className="p-4 sticky top-0 z-50  bg-white border border-gray-200">
      <div>
        {/* //firstrow */}
        <div className="flex justify-between items-center p-2 mb-6">
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-8" />
            <p className="text-xl tracking-wide font-semibold">Shopping</p>
          </div>

          <div className="w-96">
            <input
              className="w-full p-2 font-normal bg-white border border-gray-500 rounded-none"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="flex items-center space-x-10">
            <Link to="/profile">
              <AiOutlineUser />
              <span className="text-xs font-normal hover:underline transition-all duration-200">
                Profile
              </span>
            </Link>
            <Link to="/saved">
              <GoHeart />
              <span className="text-xs font-normal hover:underline transition-all duration-200">
                Saved
              </span>
            </Link>
            <Link to="/cart" className='relative'>
              <HiOutlineShoppingBag />
              <span className="text-xs font-normal hover:underline transition-all duration-200">
                Cart
              </span>
              {totalQuantity > 0 ?   <span className='bg-lime-500 font-medium absolute top-[-11px] right-1 flex items-center text-[9px] justify-center h-4 w-4 rounded-full'>{totalQuantity}</span> : null}
            
            </Link>
          </div>
        </div>

        {/* second */}
        <div>
          <div className="flex justify-center items-center">
            <ul className="flex space-x-10">
              {NavData.map((items) => (
                <Navitems to={items.url} text={items.text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
