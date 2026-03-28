import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <div className="flex justify-between items-center px-20 py-16">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold leading-tight">
            <span className="text-red-500">BOOST</span> YOUR EMAIL <br />
            MARKETING RESULTS!
          </h1>

          <p className="mt-4 text-gray-500">
            We help B2C brands grow their email revenue
          </p>

          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded">
            BOOST YOUR RESULTS
          </button>
        </div>

        <img src="/wave.png" className="w-[500px]" />
      </div>

      {/* BLACK BLOCK */}
      <div className="bg-black text-white mx-20 p-10 rounded-2xl flex justify-between">
        <h2 className="text-3xl font-bold">
          WE ARE HERE <br />
          TO <span className="text-red-500">HELP</span>
        </h2>

        <ul className="space-y-2">
          <li>• Low email revenue</li>
          <li>• Need growth ideas</li>
          <li>• Want expert help</li>
        </ul>
      </div>

      {/* SWIPER */}
      <div className="px-20 mt-16">
        <h2 className="text-3xl font-bold mb-6">Our Work</h2>

        <Swiper spaceBetween={20} slidesPerView={3}>
          <SwiperSlide>
            <img src="/1.png" className="rounded-xl" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/2.png" className="rounded-xl" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/3.png" className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default Home;