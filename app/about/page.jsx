import Image from 'next/image'
import { boxes } from '@/utils/data'
import React from 'react'
import Boxes from '@/components/Boxes';

export default function AboutPage() {
  return (
      <section className='home h-[80vh] flex items-center'>
        <div className="container-center gap-4">
          <div className="flex-1 flex flex-col gap-12">
            <h1 className='text-[85px]'>We create digital ideas that are bigger, bolder, braver and better.</h1>
            <p className='text-[20px]'>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
            <div className="flex gap-14">
              {boxes && (
                boxes.map((item, index) => {
                  const {label, value} = item
                  return(
                    <Boxes {...item} key={index}/>
                  )
                })
              )}
            </div>
          </div>
          <div className="flex-1 relative min-h-[600px] ">
            <Image src="/about.svg" alt='team' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        </div>
      </section>
    );
  }




