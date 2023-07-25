import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#dfd5a5]">
    <div className='grid w-full grid-cols-5 grid-rows-4'>
    <div className='bg-white w-full h-full block min-h-20' ></div>
    <div className='bg-red w-full h-full ' ></div>

    </div>
    </main>
  )
}
