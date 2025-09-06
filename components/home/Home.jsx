import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <section className='home'>
            <div className="container-center">
                <div className="flex-1 flex flex-col gap-12">
                    <h1 className='text-[85px]'>Creative Thoughts Agency</h1>
                    <p className='text-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
                    <div className="flex gap-5">
                        <button>Learn More</button>
                        <button>Contact</button>
                    </div>
                    <div className="">
                        <Image/>
                    </div>
                </div>
                <div className="flex-1 relative min-h-[500px] ">
                    <Image src="/content-team.svg" alt='team' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
            </div>
        </section>
    )
}

export default Home