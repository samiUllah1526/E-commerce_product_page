// import iconMenu from "./images/icon-menu.svg";
// import iconCart from "./images/icon-cart.svg";
import { useState, useEffect } from "react";
import iconPlus from "./images/icon-plus.svg";
import iconMinus from "./images/icon-minus.svg";
import iconCart from "./images/icon-cart.svg";
import { Navbar } from "./components/Navbar";
import { MobileSlider } from "./components/MobileSlider";
import { Description } from "./components/Description";
import { PriceBar } from "./components/PriceBar";
function App() {
  // const [test, setTest] = useState("");
  // const [error, setError] = useState("i am error");
  // console.log("error", error);
  // useEffect(() => {
  //   setError(!error);
  // }, [test]);

  return (
    <>
      {/* <input
        type="text"
        placeholder="d"
        value={test}
        onChange={(e) => setTest(e.target.value)}
      /> */}
      <Navbar />
      <MobileSlider />
      <Description />
      <PriceBar />
      <div className="container w-11/12 ">
        <div className="flex items-center justify-between rounded-lg h-14 px-5 bg-mentor-lightGrayishBlue">
          <a className="block">
            <img src={iconMinus} alt="iconMinus" />{" "}
          </a>
          <div className="font-bold">0</div>
          <a className="block">
            <img src={iconPlus} alt="iconPlus" />{" "}
          </a>
        </div>
        <div className="my-4 flex justify-center items-center rounded-lg h-14 px-5 bg-mentor-orange text-white">
          <div className="mr-3">
            <img className="w-5 h-5" src={iconCart} alt="iconCart" />
          </div>
          <div>
            <button className="font-bold text-base" type="submit">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
