import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 z-0 '>
      <div className="max-h-[500px] relative ">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center pl-10 rounded-xl">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            En <span className='text-orange-500'>İyi</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Yiyecek<span className='text-gray-300'> Ve</span>  <span className='text-orange-500'> İçecekler</span>
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover rounded-xl" src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}
export default Hero