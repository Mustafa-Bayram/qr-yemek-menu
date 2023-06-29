import React, { useState } from 'react'
import { data } from '../data/data.js';

const Food = () => {
  console.log(data);
  const [foods, setFoods] = useState(data);

  // Filter the foods by category
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    )
  }
  // filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-10 '>
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Menü
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filtre Türleri     </p> 
            <div className="flex justify-between flex-wrap my-2">
              <button onClick={() => setFoods(data)} className="m-1 p-1 rounded-xl
               border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
              ">Tümü</button>
               <button onClick={() => filterType('soğuk içecek')} className="m-1 p-1 rounded-xl
                border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
              ">Soğuk İçecekler</button>
               <button onClick={() => filterType('içecek')} className="m-1 p-1 rounded-xl
              border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
              ">Sıcak İçecekler</button>
               <button onClick={() => filterType('yemek')} className="m-1 p-1 rounded-xl
                border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
              ">Yiyecekler</button>
              
               <button onClick={() => filterType('tatli')} className="m-1 p-1 rounded-xl
               border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
              ">Tatlılar</button>
            </div>
      
        </div>
     

      {/* Filter price */}
      <div className="font-bold text-gray-700">
        <p className="flex justify-between max-w-[390px] w-full ">
          Fiyatları Filtrele
        </p>
   
      <div>
        <button onClick={() => filterPrice('₺')} className="m-1 p-1 px-3 mt-3 rounded-xl
        border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
        ">
          ₺
        </button>
        <button onClick={() => filterPrice('₺₺')} className="m-1 p-1 px-3 rounded-xl
        border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
        ">
          ₺₺
        </button>
        <button onClick={() => filterPrice('₺₺₺')} className="m-1 p-1 px-3 rounded-xl
        border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
        ">
          ₺₺₺
        </button>
        <button onClick={() => filterPrice('₺₺₺₺')} className="m-1 p-1 px-3 rounded-xl
        border-[1px] border-orange-600
              text-orange-600
              hover:bg-orange-600
              hover:text-white
              duration-300
        ">
          ₺₺₺₺
        </button>
      </div>
    </div>
    </div>
    {/* display foods */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="image w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food

