import React, { useEffect, useState } from "react";
import { stadiumsApp } from "../../api/Posts";

interface stads {
  id: number;
  city: string;
  name: string;
  image: string;
}

const AllStadiums = () => {
  const [stadiums, setStadiums] = useState<stads[]>([]);
  console.log(stadiums);

  const deleteStadums = (id: number) => {
    stadiumsApp.delete(`${id}`);
    setStadiums(
      stadiums.filter((stad) => {
        return stad.id !== id;
      })
    );
  };

  useEffect(() => {
    stadiumsApp.get("").then((res) => {
      console.log(res);

      setStadiums(res.data.stadiums);
    });
  }, []);

  return (
    <div className="stadiums grid grid-cols-main gap-6 bg-gray-300 p-6">
      {stadiums.map((stad) => (
        <div className="stad-card bg-white p-4 rounded-lg" key={stad.id}>
          <h3 className="my-4 text-center font-black">{stad.name}</h3>
          <p className="text-center font-semibold">{stad.city}</p>
          <img src={stad.image} alt={stad.name} className="w-full h-40" />
          <button
            onClick={() => deleteStadums(stad.id)}
            className="py-2 px-8 bg-red-400 text-white my-4 mx-auto rounded-lg block hover:bg-red-800 transition-all"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllStadiums;
