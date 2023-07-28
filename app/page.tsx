import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="grid w-full grid-cols-3 lg:grid-cols-5 leading-normal gap-3 p-10 md:p-18 xl:p-36 bg-[#DFD5A5] text-[30px] lg:gap-10">
        <div className=" transition-all uppercase w-full h-full md:text-7xl col-span-2 lg:col-span-4 lg:text-9xl bg-[#dbad6a] lg:p-10 height-[1500px] font-mono font-bold p-3 hover:scale-[101%] text-5xl items-center">
          Ali Asadi
        </div>
        <div className="bg-[#628395] aspect-square uppercase w-full h-full row-span-2 col-span-1 justify-center sm:text-7xl text-4xl font-mono p-3 hover:scale-[101%] lg:text-9xl font-bold text-center content-between leading-normal lg:leading-relaxed align-center flex items-center">
          {" "}
          18 år
        </div>

        <div className="bg-[#628395] aspect-square w-full uppercase hover:rounded-lg text-center h-full text-xl font-mono p-3 duration-300 transition-all hover:scale-[105%] justify-center md:text-4xl md:font-bold content-between leading-normal align-center flex items-center">
          <Image src="https://www.svgrepo.com/download/137278/linkedin.svg" width={1000} height={1000} alt="linkedin" className="object-contain p-3 md:p-10 lg:p-15" />
        </div>

        <div className="bg-[#628395] aspect-square w-full uppercase text-center h-full text-xl font-mono p-3 hover:scale-[101%] justify-center md:text-4xl md:font-bold content-between leading-normal align-center flex items-center">
          design
        </div>

        <div className="bg-[#628395] w-full uppercase text-center h-full text-xl font-mono p-3 hover:scale-[101%] justify-center md:text-4xl md:font-bold content-between leading-normal align-center flex items-center">
          design
        </div>
        <div className="bg-[#dbad6a] w-full h-full col-span-2 lg:text-4xl uppercase text-xl xs:text-2xl md:text-3xl font-mono p-3 hover:scale-[101%] text-center grid md:font-bold items-center justify-center">
          {" "}
          overskuelighed
        </div>
        <div className="bg-[#dbad6a] hidden lg:flex w-full h-full col-span-2 lg:text-4xl uppercase text-2xl md:text-3xl font-mono p-3 hover:scale-[101%] text-center md:font-bold items-center justify-center">
          {" "}
          Anvendlighed
        </div>
      </div>
    </main>
  );
}
