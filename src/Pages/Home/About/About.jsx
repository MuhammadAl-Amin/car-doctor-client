import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="relative">
            <p className="w-3/4 h-full">
              <img src={person} className=" rounded-lg shadow-2xl" />
            </p>
            <p className="w-1/2 absolute left-1/3 top-1/2 border-8 rounded border-gray-100">
              <img className="" src={parts} alt="" />
            </p>
            /
          </div>
          <div className=" space-y-6">
            <h1 className="text-lg font-bold text-[#FF3811]">About me</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811]">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
