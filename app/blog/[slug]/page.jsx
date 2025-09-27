import { getUnsplashImage } from '@/lib/unsplash'
import { truncateText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { CiUser } from "react-icons/ci";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 }
  })

  if (res.status === 404) return null
  if (!res.ok) throw new Error("Faild to fetch post")
  // console.log(res);
  return res.json()
}

async function getUser(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

async function SinglePage({ params }) {

  // console.log(params);

  const { slug } = await params

  const post = await getPost(slug)

  if (!post) return notFound()

  const [imageUrl, user] = await Promise.all([
    getUnsplashImage(post.title, { size: "regular" }),
    getUser(post.userId)
  ])
  // console.log(user);


  const data = "04.09.2025"

  const authorName = user?.name ?? "unknow author"

  return (
    <div className='mx-auto max-w-[128rem] py-20 px-20'>
      <div className="flex flex-col">
        <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
          <Image src={imageUrl ?? "/file.svg"} alt={post.title} fill className='object-cover' sizes='(min-width: 1280px) 50vw, 100vw' priority />
        </div>
        <h1 className="text-[64px] leading-[1.1] font-semibold capitalize mt-14">
          {truncateText(post.title, 50)}
        </h1>
        <div className="flex mt-14 gap-16 items-center">
          <div className=" flex flex-wrap items-center gap-4 text-[16px]">
            <CiUser className='size-10 bg-amber-400 text-[30px] rounded-full' />
            <div className="flex flex-col">
              <span className='text-zinc-500'>Author</span>
              <span className='font-medium'>{authorName}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className='text-zinc-500'>Published</span>
            <span className='font-medium'>{data}</span>
          </div>
        </div>
        <div className="mt-14 text-[18px] text-zinc-200">
          <p>
            {post.body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage