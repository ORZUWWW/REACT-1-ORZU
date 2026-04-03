import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  let imageUrl = "http://37.27.29.18:8001/images";
  let url = "http://37.27.29.18:8001/api/to-dos";

  async function getById() {
    try {
      let { data } = await axios.get(url);
      let user = data.data.find((e) => e.id == id);
      setData(user);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getById();
  }, [id]);

  
  if (!data) {
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-[700px] mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Info Page</h1>

        {data.images?.length > 0 && (
          <img
            src={`${imageUrl}/${data.images[0].imageName}`}
            alt=""
            className="w-[120px] h-[120px] rounded-full object-cover mb-6"
          />
        )}

        <h2 className="text-2xl font-bold mb-3">{data.name}</h2>

        <p className="text-lg text-gray-700 mb-3">
          <span className="font-bold">Description:</span> {data.description}
        </p>

        <p className="text-lg">
          <span className="font-bold">Status:</span>{" "}
          {data.isCompleted ? "Active" : "Inactive"}
        </p>
        <button className="bg-[red] w-[300px] rounded-2xl text-white my-[30px] p-[20px]">CANCEL</button>
      </div>
    </div>
  );
};

export default Info;