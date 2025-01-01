import Link from 'next/link'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {ArrowRight, Menu} from "lucide-react"
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <div className='fixed w-full flex items-center  justify-between px-5 md:px-20 py-2 bg-white z-40'>

      <Link href='/' className='text-xl text-primary font-bold'>Ayo<span className='text-secondary'> Call Center</span></Link>
      <div className="hidden md:flex items-center gap-5">
        <Link href='/' className='text-primary hover:text-secondary text-lg'>Home</Link>
        <Link href='/about' className='text-primary hover:text-secondary text-lg'>About Us</Link>
        <Link href='/services' className='text-primary hover:text-secondary text-lg'>Services</Link>
        <Link href='/workers' className='text-primary hover:text-secondary text-lg'>Our Professionals</Link>

      </div>
      <Link href='https://t.me/+251944130549' className='hidden md:flex items-center gap-2 text-primary border-secondary p-2 px-3 rounded-full shadow-md hover:bg-secondary hover:text-white'>Contact US <ArrowRight/></Link>
      <Drawer>
        <DrawerTrigger>
          <div className='flex md:hidden text-xl items-center gap-2 text-primary    hover:text-secondary'><Menu size={30} /></div>

        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col items-center gap-3">
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/'>Home</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/about'>About</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/services'>Services</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/blogs'>Blog</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/workers'>Workers</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='https://t.me/+251944130549'>Contact Us</Link>

          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      

    </div>
  )
}

export default Navbar