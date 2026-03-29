
import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "react-router-dom";
import { Autoplay } from "swiper/modules";

const Info = () => {
  const { id } = useParams();

  let api = "http://37.27.29.18:8001/api";
  let img = "http://37.27.29.18:8001/images";

  let [data, setData] = useState(null);
  let [file, setFile] = useState(null);


  async function getId() {
    let  data = await axios.get(`${api}/to-dos/${id}`);
    setData(data.data.data);
  }

useEffect(() => {
  getId();
}, [id]);

 
  async function addImage(e) {
    e.preventDefault()
    let form = new FormData();
    form.append("Images", file);
    try {
    await axios.post(`${api}/to-dos/${id}/images`,form);
    getId();
    } catch (error) {
      console.error(error);
    }
  }

 
  async function deleteImage(idImg) {
   try {
     await axios.delete(`${api}/to-dos/images/${idImg}`);
    getId();
   } catch (error) {
    console.error(error);
   }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {data?.name}
      </h1>
  
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto text-sm" />
        <button
          onClick={addImage}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Upload
        </button>
      </div>

   
      <Swiper
  modules={[Autoplay]}
  slidesPerView={3}
  spaceBetween={15}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
>
        {data?.images?.map((e) => (
          <SwiperSlide key={e.id}>
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md ">

              <img
                src={`${img}/${e.imageName}`}
                className="w-full h-[180px] "
              />

            
              <div className="p-3">
                <button
                  onClick={() => deleteImage(e.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm "
                >
                  Delete
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  </div>
  );
};

export default Info;