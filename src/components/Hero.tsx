import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image'
import BlurFade from './ui/blur-fade';
import { FadeText } from './ui/fade-text';
export default function Hero(){
    return(
        <div className='flex items-center flex-col justify-center gap-3 md:gap-6 md:h-screen relative px-6 md:px-20 py-20 md:py-0'>
            <BlurFade delay={0.45} inView={true} >
            <h1 className='text-2xl md:text-6xl font-bold md:font-medium text-[#141414] text-center z-20'>Comprehensive <span className='text-primary '>Call Center</span><br/>Solutions for your Business.</h1>
             </BlurFade>
             <FadeText
                className="text-gray-400 text-lg md:text-xl text-center mx-auto justify-center w-[90%] md:w-[60%] z-20"
                direction="left"
                framerProps={{
                    show: { transition: { delay: 0.55 } },
                }}
                text="At Elibat, we understand the challenge businesses face in managing their outsourcing budget while striving to enhance."
            />  
            <BlurFade delay={0.35} inView={true} >  
            <Image src='/call2.jpg' alt='call' height={150} width={150} className='object-cover rounded-2xl block md:hidden shadow-2xl' />
            </BlurFade>
             <div className='flex items-center gap-5 flex-wrap'>
                <BlurFade delay={0.65} inView={true} >
                <Link href='/' className='bg-secondary text-white py-2 px-3 shadow-sm rounded-full hover:shadow-xl flex items-center gap-2 text-lg'>Get Started <ArrowRight/></Link>
                </BlurFade>
                <BlurFade delay={0.75} inView={true} >
                <Link href='/' className='bg-primary text-white py-2 px-3 shadow-sm rounded-full hover:shadow-xl flex items-center gap-3 text-lg'>Why Us?</Link>
                </BlurFade>
            </div>
           
            <Image src='/call2.jpg' alt='call' height={230} width={230} className='object-cover rounded-2xl  hidden md:block absolute md:top-38 -z-20 right-12 shadow-2xl' />
           
            {/* <Image src='/headset.png' alt='call' height={80} width={80} className='object-cover  hidden md:block absolute md:top-[18%] -z-5 left-[8%] ' /> */}
       
        </div>
    );
}