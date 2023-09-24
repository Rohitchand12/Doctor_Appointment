import React, { useState } from "react";
import Card from "../../utility/Card";
import clinic from "../../assets/images/clinic.jpg";
import dentist from "../../assets/images/dentist.jpg";
import lab from "../../assets/images/lab.jpg";
import mri from "../../assets/images/mri.jpg";

const Categories = () => {
  const[showModal , setShowModal] = useState(false);
  const handleMouseOver = (e) =>{
    console.log(e);
  }
  // const handleMouseOut = () =>{

  // }
  return (
    <section className="lg:h-[80vh] max-h-fit bg-blue-50 ">
      <div className="h-ful">
        {/* heading div */}
        <div className="text-center pt-16 mb-10">
          <p className="lg:text-4xl text-2xl font-bold">
            High Quality service for you
          </p>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* heading div ends */}
        {/* content div starts here */}
        <div className="h-full w-full flex flex-wrap items-center justify-center py-2">
          <div
            style={{
              backgroundImage: `url(${clinic})`,
              backgroundSize: "cover",
            }}
            className="lg:h-[20rem] lg:w-[21.25%] md:h-[13.5rem] md:w-[42.5%] h-[27rem] w-[95%] m-2 rounded-lg"
            onMouseOver={handleMouseOver}
          >
          </div>
          <div
            style={{
              backgroundImage: `url(${dentist})`,
              backgroundSize: "cover",
            }}
            className="lg:h-[20rem] lg:w-[21.25%] md:h-[13.5rem] md:w-[42.5%] h-[27rem] w-[95%] m-2 rounded-lg"
          ></div>
          <div
            style={{ backgroundImage: `url(${lab})`, backgroundSize: "cover" }}
            className="lg:h-[20rem] lg:w-[21.25%] md:h-[13.5rem] md:w-[42.5%] h-[27rem] w-[95%] m-2 rounded-lg"
          ></div>
          <div
            style={{ backgroundImage: `url(${mri})`, backgroundSize: "cover" }}
            className="lg:h-[20rem] lg:w-[21.25%] md:h-[13.5rem] md:w-[42.5%] h-[27rem] w-[95%] m-2 rounded-lg"
          ></div>
        </div>
        {/* content div ends */}
      </div>
    </section>
  );
};

export default Categories;
