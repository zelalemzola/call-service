import BlurFade from '@/components/ui/blur-fade'
import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className='md:h-screen w-full px-10 md:px-20 flex flex-col gap-5 items-center py-10'>
          
          <h1 className='text-3xl md:text-4xl  text-center '>Frequently Asked Questions(FAQs)</h1>

          
              
        <div className="w-full md:w-[70%] md:py-20">
            <BlurFade delay={0.35} inView={true}>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Is it styled?</AccordionTrigger>
                          <AccordionContent>
                              Yes. It comes with default styles that matches the other
                              components&apos; aesthetic.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Is it animated?</AccordionTrigger>
                          <AccordionContent>
                              Yes. It&apos;s animated by default, but you can disable it if you
                              prefer.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

            </BlurFade>
        </div>
        </div>


  )
}

export default Faq