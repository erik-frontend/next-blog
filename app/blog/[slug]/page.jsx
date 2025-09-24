import { getUnsplashImage } from '@/lib/unsplash'
import { truncateText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

 async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {revalidate: 3600}
  })  

  if(res.status === 404) return null
  if(!res.ok) throw new Error("Faild to fetch post")
    return res.json()
}

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {revalidate: 3600}
  })

  if(!res.ok) return null
  return res.json()
}

async function SinglePage({params}) {

  // console.log(params);
  
  const {slug} = await params

  const post = await getPost(slug)

  const user = await getUser(slug)

  console.log(user);
  

  if(!post) return notFound()

  if(!user) return "Unknown author"

  const data = "04.09.2025"

  const [imageUrl] = await Promise.all([
    getUnsplashImage(post.title, {size: "regular"}),
    getUser(user.id)
  ])

  return (
    <div className='mx-auto max-w-[128rem] py-20 px-20'>
      <div className="grid gap-16 xl:grid-cols-2 items-start">
        <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
          <Image src={imageUrl ?? "/file.svg"} alt={post.title} fill className='object-cover' sizes='(min-width: 1280px) 50vw, 100vw' priority/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage