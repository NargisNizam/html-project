import React from 'react'
 const Navbar = () => {
  return (
      <div className='container pt-8 bg-blue-200 min-w-full'>
        <div className='flex justify-between item-center'>
            <div className='text-xl font-medium ms-6'>Nargis Nizam</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex justify-end mr-8 mb-5'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>   
            </div>
            </div>
  )
}
export default Navbar