import Slider from "react-slick";
function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="relative  before:bg-gradient-to-r before:from-primary-color before:to-transparent before:absolute before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt="img1"
          />
        </div>
        <div>
          <img
            className="w-full h-[500] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="img2"
          />
        </div>
      </Slider>
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="img3"
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br /> kapınızda <br />
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div>
              <input
                placeholder="Telefon numarası"
                required
                className="cursor-pointer h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-color focus:border-primary-color outline-none  text-sm pt-2"
              />
            </div>
            <button className="bg-yellow-300 text-primary-color hover:bg-primary-color hover:text-yellow-300 h-12  rounded-md  text-sm font-semibold ">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
