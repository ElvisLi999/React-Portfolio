import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text4xl sm:text-7xl font-bold text-white">I'm a Software Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I graduated from the Software Engineering Technician program in
            Centennial College. React, Tailwind, Java, C#, Oracle SQL are my
            favorite technologies.
          </p>

          <div>
            <button>
              Portfolio
              <span>
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Elvis's profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
