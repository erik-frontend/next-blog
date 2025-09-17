import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getUnsplashImage(query, index, size="small") {
    const key = process.env.UNSPLASH_ACCESS_KEY
    if(!key) return null

    try {
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=10`, {
            headers: {Autorization:`Client-ID ${key}`},
            next: {revalidate: 86400}
        })
        if(!res.ok) return null

        const data = await res.json()
        const result = Array.isArray(data?.result) ? data.result : []
        const img = result.length ? result[index % result.length] : null
        return img?.urls?.[size] ?? null
    } catch (error) {
        
    }
}

const PostCard = async ({ post, index = 0 }) => {

    const imageUrl = (await getUnsplashImage(post.title, index)) ?? "/file.svg"

    const data = post.data ?? "01.09.2025"

    return (
        <article className='max-w-[420px]'>
            <div className="">
                <div className="relative w-[90%] h-[400px] overflow-hidden rounded-xl">
                    <Image src={imageUrl} alt='' fill className='object-cover' sizes='(mix-width: 1280px) 50vw, 100vw' priority={index < 2} />
                </div>
                <time>{data}</time>
            </div>
            <div className="">
                <h3>
                    {post.title}
                </h3>
                <p>{post.body}</p>
                <Link href="">Read more</Link>
            </div>
        </article>
    )
}

export default PostCard