import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Info = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const api = "http://37.27.29.18:8001/api";

  // ✅ GET BY ID
  const getById = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${api}/to-dos/${id}`);

      const item = res.data.data[0];

      setData(item);
      setImages(item.images || []);
    } catch (err) {
      console.error(err);
      setError("Error loading data ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getById();
  }, [id]);

  // ✅ ADD IMAGE
  const addImage = async () => {
    try {
      if (!file) return;

      const form = new FormData();
      form.append("file", file);

      await axios.post(`${api}/images/${id}`, form);

      getById();
    } catch (err) {
      console.error(err);
      setError("Error uploading image ❌");
    }
  };

  // ✅ DELETE IMAGE
  const deleteImage = async (imgId) => {
    try {
      await axios.delete(`${api}/images/${imgId}`);
      getById();
    } catch (err) {
      console.error(err);
      setError("Error deleting image ❌");
    }
  };

  // 🔥 UI STATES
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!data) return null;

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-2">
        {data.name}
      </h1>

      <p className="text-gray-500 mb-4">
        {data.description}
      </p>

      {/* ADD IMAGE */}
      <div className="mb-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={addImage}
          className="ml-2 bg-green-500 text-white px-4 py-2"
        >
          Upload
        </button>
      </div>

      {/* SWIPER */}
      <Swiper spaceBetween={20} slidesPerView={3}>
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={`http://37.27.29.18:8001/images/${img.imageName}`}
              className="rounded-xl"
            />

            <button
              onClick={() => deleteImage(img.id)}
              className="bg-red-500 text-white w-full mt-2"
            >
              Delete
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Info;