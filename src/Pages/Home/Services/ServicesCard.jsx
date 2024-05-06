import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl  text-center font-bold text-[#444444]">
            {title}
          </h2>
          <div className="flex justify-end items-center">
            <p className="text-xl font-semibold text-[#FF3811]">
              Price : {price}
            </p>
            <p className="text-[#FF3811] flex justify-end">
              <Link to={`/services/${_id}`}>
                <FaArrowRightLong className="w-6" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
