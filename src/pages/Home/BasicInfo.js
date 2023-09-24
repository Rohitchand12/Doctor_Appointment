import React from "react";
import appointmentImg from "../../assets/images/appoinment-img.png";
import Card from "../../utility/Card";
import serviceIcon from "../../assets/images/icon03.png";
import visitIcon from "../../assets/images/visit.avif";
import medicalIcon from "../../assets/images/medical.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import BasicInfoCardBody from "./BasicInfoCardBody";

const info = [
  {
    title: "Visit a Doctor",
    icon: visitIcon,
    description:
      "We provide the a wide range of medical services, so every person could have the opportunity",
  },
  {
    title: "Medical",
    icon: medicalIcon,
    description:
      "We provide the a wide range of medical services, so every person could have the opportunity",
  },
  {
    title: "Services",
    icon: serviceIcon,
    description:
      "We provide the a wide range of medical services, so every person could have the opportunity",
  },
];

const BasicInfo = () => {
  return (
    <section className="lg:h-full h-auto w-full">
      <div className="h-full w-[95%] flex mx-auto">
        {/* left div  */}
        <div className="lg:block hidden lg:h-full lg:ml-2 lg:basis-1/3">{/* main div left*/}
          <img
            className="max-h-full"
            src={appointmentImg}
            alt="appointment image"
          />
        </div>
        {/* //right div */}
        <div className="lg:basis-[70%] justify-center h-full w-full flex flex-wrap"> {/*main div right*/}
          {info.map((item) => {
            return (
              <Card>
                <BasicInfoCardBody
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              </Card>
            );
          })}
          {/* schedules */}
          <div className="h-[35%] w-full flex items-center flex-wrap justify-between lg:my-0 my-2">
            <div className="h-[70%] md:w-[30%] py-5 m-3 w-full flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg">
              <div className="h-[70%] w-[80%] flex flex-col justify-between">
                <p className="text-2xl font-semibold">Schedule</p>
                <p className="flex justify-between md:py-0 py-2 text-gray-500 font-semibold">
                  <span>Monday-Friday</span> 8:00 - 13:00
                </p>
                <p className="flex justify-between md:py-0 py-2 text-gray-500 font-semibold">
                  <span>Saturday</span> 8:00 - 15:00
                </p>
              </div>
            </div>

            <div className="h-[70%] md:w-[65%] md:p-0 p-4 w-full flex flex-col justify-center items-center bg-blue-500 rounded-lg">
              <div className="h-[80%] w-[90%] flex flex-col">
                <p className="text-white text-3xl font-semibold">
                  Request an appointment
                </p>
                <div className="flex mt-5">
                  <div className="max-w-fit">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      size="4x"
                      className="text-white inline-block"
                    />
                  </div>
                  <div className="flex flex-col w-[80%]  ml-5">
                      <p className="text-white font-semibold text-xl">Call us on</p>
                      <p className="text-white font-semibold text-4xl">+1-(208)-87610</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
