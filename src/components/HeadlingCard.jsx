const HeadlingCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Yiyecekler
          </p>
          <p className="px-2">yüzde 10 indirimli</p>
          {/* <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-1 px-3 rounded-xl">
            Şimdi Al
          </button> */}
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>

      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            İçecekler
          </p>
          <p className="px-2">yüzde 10 indirimli</p>
          {/* <button className="border-white bg-white text-black mx-2 p-1 px-3 rounded-xl absolute bottom-4">
            Şimdi Al
          </button> */}
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-center  rounded-xl " src="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>

       {/* card */}
       <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Tatlılar
          </p>
          <p className="px-2">yüzde 10 indirimli</p>
          {/* <button className="border-white bg-white text-black mx-2 p-1 px-3 rounded-xl absolute bottom-4">
            Şimdi Al
          </button> */}
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover  rounded-xl " src="https://images.pexels.com/photos/8696281/pexels-photo-8696281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}
export default HeadlingCard