import React from 'react'
import Form from 'next/form';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className='about h-[80vh] flex items-center'>
      <div className="container-center ">
          <div className="relative grayscale-[1]">
            <Image src="/contact.svg" alt='brands' width={500} height={500} layout='responsive'/>
          </div>
        <div className="flex-1 relative min-h-[500px] ">
          <Form className='flex flex-col gap-5'>
            <input name="text" type='text' placeholder="Name" className='input-style animation'/>
            <input name="email" type='email' placeholder="Email" className='input-style animation'/>
            <input name="mobile" type='number' placeholder="Phone number" className='input-style animation'/>
            <textarea name="message" placeholder="Message" className='input-style animation h-[280px] resize-none'/>
            <button type="submit" className='p-5 bg-[#3673fd] text-white capitalize font-bold rounded-[5px] cursor-pointer'>Send</button>
          </Form>
        </div>
      </div>
    </section>
  )
}
