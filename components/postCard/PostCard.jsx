import { getUnsplashImage } from '@/lib/unsplash'
import { truncateText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = async ({ post, index = 0 }) => {

    const imageUrl = (await getUnsplashImage(post.title, index)) ?? "/file.svg"

    // console.log(imageUrl);
    

    const data = post.data ?? "01.09.2025"

    return (
        <article className='max-w-[420px]'>
            <div className="">
                <div className="relative w-[90%] h-[400px] overflow-hidden rounded-xl">
                    <Image src={imageUrl} alt='' fill className='object-cover' sizes='(mix-width: 1280px) 50vw, 100vw' priority={index < 2} />
                </div>
                <time className='block mb-4'>{data}</time>
            </div>
            <div className="">
                <h3 className='text-3xl mb-4 capitalize'>
                    {truncateText(post.title, 50)}
                </h3>
                <p className='text-xl mb-4'>{truncateText(post.body, 100)}</p>
                <Link href={`/blog/${post.id}`} className='block border-2 px-4 py-3 w-[180px] text-center'>Read more</Link>
            </div>
        </article>
    )
}

export default PostCard