import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full my-32">
      <div className="mx-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl text-bold">
            Trusted by developer accross the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-pink-600">100%</p>
            <p className="mt-2 text-gray-500">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-bold font-bold text-pink-600">24/7</p>
            <p className="mt-2 text-gray-500">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-bold font-bold text-pink-600">100K</p>
            <p className="mt-2 text-gray-500">Transictions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
