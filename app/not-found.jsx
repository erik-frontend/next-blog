import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center h-9/10 justify-center '>
        <h2 className='text-5xl font-bold mb-4'>Sorry not found page</h2>
        <Link className='text-2xl text-red-600' href="/">Return Home</Link>
    </div>
  )
}

export default NotFound