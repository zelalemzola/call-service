import Link from 'next/link'
import React from 'react'
import {ArrowRight, Menu} from "lucide-react"
const Navbar = () => {
  return (
    <div className='fixed w-full flex items-center  justify-between px-5 md:px-20 py-2 bg-white z-40'>

      <Link href='/' className='text-xl text-primary font-bold'>Elibat<span className='text-secondary'> Call Center</span></Link>
      <div className="hidden md:flex items-center gap-5">
        <Link href='/' className='text-primary hover:text-secondary text-lg'>Home</Link>
        <Link href='/' className='text-primary hover:text-secondary text-lg'>About Us</Link>
        <Link href='/' className='text-primary hover:text-secondary text-lg'>Services</Link>

      </div>
      <Link href='/' className='hidden md:flex items-center gap-2 text-primary border-secondary p-2 px-3 rounded-full shadow-md hover:bg-secondary hover:text-white'>Contact US <ArrowRight/></Link>
      <Link href='/' className='flex md:hidden text-xl items-center gap-2 text-primary    hover:text-secondary'><Menu size={30}/></Link>
      
    </div>
  )
}

export default Navbar