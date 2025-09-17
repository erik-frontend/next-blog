import PostCard from '@/components/postCard/PostCard'
import React from 'react'

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=30")
  if (!res.ok) {
    throw new Error("something wrong")
  }
  return res.json()
}

export default async function BlogPage() {

  const posts = await getData()

  // console.log(posts);


  return (
    <section className='max-auto container-center'>
      <h1>Blog</h1>
      <div className="flex gap-5 flex-wrap justify-between">
        {posts && (
          posts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))
        )}
      </div>
    </section>
  )
}
