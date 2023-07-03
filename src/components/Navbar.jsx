import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { PiCoffeeFill } from 'react-icons/pi';
import { LuCupSoda } from 'react-icons/lu';
import { GiCupcake, GiFullPizza } from 'react-icons/gi';
import {data} from '../data/data.js';
import SearchBar from './SearchBar.jsx';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left sides  */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="hidden text-2xl sm:flex sm:text-3xl ld:text-4xl px-2 ">
          Tatlı <span className="font-bold ml-2">İçecek</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full">Soğuk</p>
          <p className="p-2">Sıcak</p>
        </div>
      </div>
     
      <SearchBar placeholder="Yemek,İçecek,Tatlı Ara..." data={data}/>
      {/* Cart Button */}

      <button className="bg-black sm:px-4 text-white flex ml-3 md:flex items-center sm:py-3 py-2 px-[3px] rounded-full">
        <BsFillTelephoneFill className=" mr-2" size={17} />
        <a className="text-sm" href="tel:+905518734345">
          İletişim
        </a>
      </button>
      {/* Mobile Button */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/* Side drawer menu  */}

      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-700 '
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-700'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-3xl p-4">
          En İyi{' '}
          <span className="font-bold">
            İçecekler <br /> <span className="font-medium">Ve</span> Tatlılar
          </span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
            <li className="text-xl py-4 flex">
              <PiCoffeeFill size={30} className="mr-3" />
              Sıcak İçecekler
            </li>
            <li className="text-xl py-4 flex">
              <LuCupSoda size={30} className="mr-3" />
              Soğuk İçecekler
            </li>
            <li className="text-xl py-4 flex">
              <GiCupcake className="mr-3" size={30} />
              Tatlılar
            </li>
            <li className="text-xl py-4 flex">
              <GiFullPizza className="mr-3" size={30} />
              Yiyecekler
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
