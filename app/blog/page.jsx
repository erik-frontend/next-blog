import React from 'react'

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=30")
  if(!res.ok) {
    throw new Error("something wrong")
  }
  return res.json()
}

export default async function BlogPage () {

  const posts = await getData()

  console.log(posts);
  

  return (
    <section>
        <h1>Blog</h1>
        {posts && (
          posts.map((post, index) => (
            <div className="" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
    </section>
  )
}
