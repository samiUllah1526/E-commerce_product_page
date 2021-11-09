// import iconMenu from "./images/icon-menu.svg";
// import iconCart from "./images/icon-cart.svg";
import iconPlus from "./images/icon-plus.svg";
import iconMinus from "./images/icon-minus.svg";
import iconCart from "./images/icon-cart.svg";
import { Navbar } from "./components/Navbar";
import { MobileSlider } from "./components/MobileSlider";
import { Description } from "./components/Description";
import { PriceBar } from "./components/PriceBar";
function App() {
  return (
    <>
      <Navbar />
      <MobileSlider />
      <Description />
      <PriceBar />
      <div className="container w-11/12 ">
        <div className="flex items-center justify-between rounded-lg h-14 px-5 bg-mentor-lightGrayishBlue">
          <a className="block">
            <img src={iconPlus} alt="" />{" "}
          </a>
          <div>0</div>
          <a className="block">
            <img src={iconMinus} alt="" />{" "}
          </a>
        </div>
        <div className="flex justify-center items-center rounded-lg h-14 px-5 bg-mentor-orange text-white">
          <div className="mr-3">
            <img className="w-5 h-5" src={iconCart} alt="cart_icon" />
          </div>
          <button className="font-bold tex-base" type="submit">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
