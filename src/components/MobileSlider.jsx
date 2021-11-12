import React, { useState } from "react";
import next from "./../images/icon-next.svg";

export function MobileSlider() {
  let [imageIndex, setImageIndex] = useState(1);
  // const productLinks = [
  //   "image-product-1.jpg",
  //   "image-product-2.jpg",
  //   "image-product-3.jpg",
  //   "image-product-4.jpg",
  // ];

  const previousImage = () => {
    if (imageIndex == 1) {
      setImageIndex(productLinks.length);
    } else {
      setImageIndex((imageIndex -= 1));
    }
  };

  const nextImage = () => {
    console.log("next clicked");
    if (imageIndex != productLinks.length) {
      setImageIndex((imageIndex += 1));
    } else {
      setImageIndex(1);
    }
  };
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/image-product-${imageIndex}.jpg`}
            alt="product"
            className="object-cover object-center w-full h-55"
          />
          {/* <img
            src={require(`./../images/products/${productLinks[0]}`).default}
            alt="product"
            className="object-cover object-center w-full h-55"
          /> */}
        </div>
        <div className="rounded-full h-10 w-10 absolute inset-y-1/2 left-5 bg-white flex justify-center items-center">
          <img
            onClick={previousImage}
            src={next}
            alt="previous"
            className="transform rotate-180 w-3/10 h-1/3"
          />
          {console.log("imageIndex==>", imageIndex)}
        </div>

        {/* NEXT */}
        <div className="rounded-full h-10 w-10  absolute inset-y-1/2 right-5 bg-white flex justify-center items-center">
          <img
            onClick={nextImage}
            src={next}
            alt="next"
            className="w-3/10 h-1/3"
          />
          {console.log("imageIndex==>", imageIndex)}
        </div>
      </div>
      <h1 className="container w-11/12 font-sans font-bold text-mentor-orange pt-5 pb-3">
        SNEAKERS COMPANY
      </h1>
    </>
  );
}
