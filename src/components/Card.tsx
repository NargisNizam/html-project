import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div>
      <div className="container mx-auto py-10 px-4">
      <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-rose-950 mb-2 text-center">My Blogs</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="p-2 shadow-lg text-gray-700 text-bold rounded-md max-w-fit hover:scale-105 active:scale-100 transition-all cursor-pointer">
          Elegant Chic
      <Image
              src="/per.1.jpeg"
              alt="perfume 1"
              width={200}
              height={300}
            />
            <div className='p-2 text-gray-600'>
            <h3 className='text-gray-600'>Ston Work</h3>
            <p>Elegant Evening Grow for you</p>
            <p className="text-sm line-clamp-1"> Price: 4,999
               </p>
               <del>Price: 5,500</del>
            </div> 
            </div>
            <div className="p-2 shadow-lg text-gray-700 text-bold rounded-md max-w-fit hover:scale-105 active:scale-100 transition-all cursor-pointer">
          Vintage Vibes
      <Image
              src="/per.2.jpeg"
              alt="purfume 2"
              width={200}
              height={300}
            />
            <div className='p-2 text-gray-600'>
            <h3 className='text-gray-600'>Ston Work</h3>
            <p>Stunning Floor-Length for you</p>
            <p className="text-sm line-clamp-1"> Price: 5,999
               </p>
               <del>Price: 6,900</del>
            </div> 
            </div>
            <div className="p-2 shadow-lg text-gray-700 text-bold rounded-md max-w-fit hover:scale-105 active:scale-100 transition-all cursor-pointer">
          Luxury Style
      <Image
              src="/per.3.jpeg"
              alt="purfume 3"
              width={200}
              height={300}
            />
            <div className='p-2 text-gray-600'>
            <h3 className='text-gray-600'>Ston Work</h3>
            <p>Breathtaking Lace Detailing for you</p>
            <p className="text-sm line-clamp-1"> Price: 3,999
               </p>
               <del>Price: 4,990</del>
            </div> 
            </div>
            <div className="p-2 shadow-lg text-gray-700 text-bold rounded-md max-w-fit hover:scale-105 active:scale-100 transition-all cursor-pointer">
          City Slick
      <Image
              src="/per.4.jpeg"
              alt="purfumr 4"
              width={200}
              height={300}
            />
            <div className='p-2 text-gray-600'>
            <h3 className='text-gray-600'>Ston Work</h3>
            <p>Exquisite Slik Dress for you</p>
            <p className="text-sm line-clamp-1"> Price: 4,990
               </p>
               <del>Price: 5,500</del>
            </div> 
            </div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Card