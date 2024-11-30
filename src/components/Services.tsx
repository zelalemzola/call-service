import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
      <div className='px-6 md:px-20 h-auto py-10 md:py-20'>
       <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-3xl md:text-5xl'>Our Services</h1>
            <p className="text-gray-400 text-md md:text-lg md:w-[60%] text-center">
                At Elibat, we specialize in providing comprehensive call center solutions for businesses. We offer a wide range of services to help you optimize your outsourcing budget and enhance your business performance.
            </p>
        </div> 
        <div className=" w-full py-8 md:py-20 flex flex-col-reverse md:flex-row items-center gap-3 md:gap-0">
            <div className='flex-1 flex flex-col items-center md:items-start gap-5'>
                <h2 className='text-[#141414] text-3xl md:text-4xl '>Call Center Optimization</h2>
                <p className="text-center  md:text-start text-gray-400 text-md md:text-lg">
                    We help businesses optimize their call center operations by providing strategic solutions, such as improved staffing levels, better communication channels, and more efficient workflows.
                </p>
                <Link href='/' className='bg-secondary text-white rounded-full shadow-sm hover:shadow-2xl text-md py-2 px-3 flex items-center gap-3'>Learn More <ArrowRight/></Link>
            </div>
            <div className='flex-1 flex items-center md:justify-center'>
              <Image src='/service1.png' alt='' width={340} height={340} className='scale-[60%] md:scale-[100%]'/>
            </div>
        </div>
        <div className=" w-full py-8 md:py-20 flex flex-col-reverse md:flex-row-reverse items-center gap-3 md:gap-0">
            <div className='flex-1 flex flex-col items-center md:items-start gap-5'>
                <h2 className='text-[#141414] text-3xl md:text-4xl '>Call Center Optimization</h2>
                <p className="text-center  md:text-start text-gray-400 text-md md:text-lg">
                    We help businesses optimize their call center operations by providing strategic solutions, such as improved staffing levels, better communication channels, and more efficient workflows.
                </p>
                <Link href='/' className='bg-secondary text-white rounded-full shadow-sm hover:shadow-2xl text-md py-2 px-3 flex items-center gap-3'>Learn More <ArrowRight/></Link>
            </div>
            <div className='flex-1 flex items-center md:justify-center'>
              <Image src='/service2.png' alt='' width={340} height={340} className='scale-[60%] md:scale-[100%]'/>
            </div>
        </div>
        <div className=" w-full py-8 md:py-20 flex flex-col-reverse md:flex-row items-center gap-3 md:gap-0">
            <div className='flex-1 flex flex-col items-center md:items-start gap-5'>
                <h2 className='text-[#141414] text-3xl md:text-4xl '>Call Center Optimization</h2>
                <p className="text-center  md:text-start text-gray-400 text-md md:text-lg">
                    We help businesses optimize their call center operations by providing strategic solutions, such as improved staffing levels, better communication channels, and more efficient workflows.
                </p>
                <Link href='/' className='bg-secondary text-white rounded-full shadow-sm hover:shadow-2xl text-md py-2 px-3 flex items-center gap-3'>Learn More <ArrowRight/></Link>
            </div>
            <div className='flex-1 flex items-center md:justify-center'>
              <Image src='/service3.png' alt='' width={340} height={340} className='scale-[60%] md:scale-[100%]'/>
            </div>
        </div>
    </div>
  )
}

export default Services