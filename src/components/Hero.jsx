import React from "react";

import {
  CloudUploadIcon,
  DatabaseIcon,
  ServerIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/Cloud(2).png";

const Hero = () => {
  return (
    <div name='home' className="w-full h-screen bg-zinc-300 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique sequencing and Prodcution</p>
          <h1 className="py-3 text-5xl md:text-7xl text-bold">Cloud Manager</h1>
          <p className="text-2xl">This is our tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 ">Get Started</button>
        </div>
        <div>
          <img className="w-full " src={bgImg} alt="" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
          mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
          border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex py-2 px-4 text-slate-500">
              <CloudUploadIcon className="h-6 text-pink-500" />
              App Security
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <ServerIcon className="h-6 text-pink-500" />
              Cloud Data
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <DatabaseIcon className="h-6 text-pink-500" />
              Dashboard Design
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-pink-500" />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
