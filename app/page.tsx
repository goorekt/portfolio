import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#dfd5a5]  ">
      <div className="grid w-full grid-cols-3 lg:grid-cols-5 leading-normal gap-3 text-[30px]">
        <div className=" transition-all w-full h-full bg-[#dbad6a] col-span-2 lg:col-span-4  font-mono font-bold p-3 hover:scale-[101%] text-5xl  items-center">
          {" "}
          ALI ASADI
        </div>
        <div className="bg-[#628395] w-full h-full col-span-1 text-4xl font-mono p-3 hover:scale-[101%] font-bold text-center content-between leading-normal align-center flex items-center">
          {" "}
          18 ÅR
        </div>
        <div className="bg-[#628395] w-full uppercase h-full text-xl font-mono p-3 hover:scale-[101%] text-center content-between leading-normal align-center flex items-center">
          design
        </div>
        <div className="bg-[#dbad6a] w-full h-full col-span-2 uppercase text-2xl font-mono p-3 hover:scale-[101%] text-center grid items-center justify-center">
          {" "}
          overskuelighed
        </div>
      </div>
    </main>
  );
}
