function Mobile() {
  return (
    <div className="relative mt-16 h-72 flex justify-around bg-violet-800 border-black rounded-lg  mx-[76px]">
      <div className="container  ml-8 flex flex-col ml-[120px] gap-y-10 mx-auto w-1/4">
        <div className="pt-[40px] text-white">
          <h1 className="text-2xl font-bold">Getir'i indirin!</h1>
          <h2 className="text-xl font-semibold">
            İstediğiniz ürünleri dakikalar içerisinde kapınıza getirelim.
          </h2>
        </div>
        <div className="">
          <a href="#" className="flex gap-x-4">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </div>
      </div>
      <div className="w-2/4 pl-10 pt-2 ">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
      </div>
    </div>
  );
}
export default Mobile;
