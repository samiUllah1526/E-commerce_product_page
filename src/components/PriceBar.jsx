import React from "react";

export function PriceBar() {
  return (
    <div className="container w-11/12 font-sans flex justify-between items-center my-7">
      <div className="font-bold flex items-center">
        <div className="text-2xl mr-4">$125.00</div>
        <div className="text-base text-mentor-orange px-2 h-6 flex items-center rounded bg-mentor-paleOrange">50%</div>
      </div>
      <div className="text-base font-bold text-mentor-grayishBlue line-through">$250.00</div>
    </div>
  );
}
