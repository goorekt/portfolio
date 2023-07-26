import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#dfd5a5]  ">
    <div className='grid w-full grid-cols-5 leading-normal gap-5'>
    <div className='bg-[#dbad6a] w-full h-full col-span-4 text-9xl font-mono p-3 hover:scale-[101%] transition-all items-center' > ALI ASADI</div>
    <div className='bg-[#628395] w-full h-full col-span-1 text-7xl font-mono p-3 hover:scale-[101%] text-center content-between leading-normal align-center flex items-center' > 18 ÅR</div>
    <div className='bg-[#628395] w-full h-full col-span-3 text-7xl font-mono p-3 hover:scale-[101%] text-center content-between leading-normal align-center flex items-center' >FRONTEND</div>
    <div className='bg-[#dbad6a] w-full h-full col-span-2 text-6xl font-mono p-3 hover:scale-[101%] text-center flex items-center' > COMPUTER ENTHUSIAST</div>
    


    </div>
    </main>
  )
}
