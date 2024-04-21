import React from 'react'
import { HiBuildingOffice2 } from "react-icons/hi2";
import EXPERIENCES from "../utils/Experiences";

const Experience = () => {
  return (
    <div className="bg-neutral-50 px-3">
      <div id="experience" className=" max-w-5xl md:px-10  py-20 m-auto">
        <h1 className="text-2xl text-center lg:text-start font-bold text-blue-600 my-5">
          EXPERIENCE
        </h1>
        <div className="space-y-10">
          {EXPERIENCES.map((experience) => (
            <div className="flex flex-col lg:flex-row gap-10 items-center px-5 rounded-md shadow-[0_0_60px_2px_lightgray] py-6">
              <div className="lg:max-w-xs max-w-xl">
                <img
                  className="rounded-md  shadow-xl"
                  alt="experience"
                  src={experience.image}
                />
              </div>
              <div className="max-w-lg">
                <h1 className="flex justify-center items-center gap-3 text-xl font-semibold">
                  {experience.title}
                  <HiBuildingOffice2 className="text-2xl animate-pulse text-cyan-700" />
                </h1>
                <p className="text-gray-500 text-center lg:text-start font-medium my-5">
                  {experience.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience