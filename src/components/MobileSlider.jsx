import React from "react";
import product1 from "./../images/image-product-1.jpg";
import next from "./../images/icon-next.svg";
import previous from "./../images/icon-previous.svg";

export function MobileSlider() {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={product1}
            alt="product1"
            className="object-cover object-center w-full h-55"
          />
        </div>
        <div className="rounded-full h-10 w-10 absolute inset-y-1/2 left-5 bg-white flex justify-center items-center">
          <img
            src={next}
            alt="previous"
            className="transform rotate-180 w-3/10 h-1/3"
          />
        </div>

        {/* NEXT */}
        <div className="rounded-full h-10 w-10  absolute inset-y-1/2 right-5 bg-white flex justify-center items-center">
          <img src={next} alt="next" className="w-3/10 h-1/3" />
        </div>
      </div>
      <h1 className="container w-11/12 font-sans font-bold text-mentor-orange pt-5 pb-3">SNEAKERS COMPANY</h1>
    </>
  );
}
