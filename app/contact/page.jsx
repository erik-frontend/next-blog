import React from 'react'
import Form from 'next/form';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className='about h-[80vh] flex items-center'>
      <div className="container-center ">
        <div className="flex-1 flex flex-col gap-12">
          <h1 className='text-[85px]'>Creative Thoughts Agency</h1>
          <div className="h-[50px] relative grayscale-[1] max-w-[500px]">
            <Image src="/brands.webp" alt='brands' fill />
          </div>
        </div>
        <div className="flex-1 relative min-h-[500px] ">
          <Form>
            <input name="text" type='text' placeholder="Name" />
            <input name="email" type='email' placeholder="Email" />
            <input name="mobile" type='number' placeholder="Phone number" />
            <textarea name="message" placeholder="Message" />
            <button type="submit">Send</button>
          </Form>
        </div>
      </div>
    </section>
  )
}
