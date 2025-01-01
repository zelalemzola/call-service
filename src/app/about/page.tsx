import BlurFade from '@/components/ui/blur-fade';
import { Crosshair, Telescope, Leaf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className='px-5 md:px-20 py-5'>
      <About />
    </div>
  )
}

export default AboutPage