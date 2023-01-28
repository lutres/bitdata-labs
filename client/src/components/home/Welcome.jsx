import React, { useContext } from "react";
import WelcomPageImage from "../../assets/welcome-page-image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Avalanche from "../../assets/avalanche.png"
import BinanceSC from "../../assets/binance.png"
import Ethereum from "../../assets/ethereum.png"
import Polygon from "../../assets/polygon.png"
import {FaConnectdevelop} from "react-icons/fa"

const Welcome = () => {
  return (
    <section>
      <div className="flex w-full justify-center items-center">
        <div className="w-9/12 flex mf:flex-row flex-col items-center justify-between mt-[90px] mf:py-20 py-10 px-4">
          <div className="w-full flex flex-1 justify-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 font-bold">
              Introduction to <br /> the Blockchain
            </h1>
            <p className="text-left mt-5 text-white font-light text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <AnchorLink
              href="#project"
              className="mf:w-fit flex flex-row justify-center items-center my-6 bg-[#2952e3] rounded-full cursor-pointer hover:bg-[#2546bd] p-3 gap-2"
            >
              <FaConnectdevelop fontSize={17} color="#fff" />
              <p className="text-white text-base font-semibold">
                Discover the Blockchain
              </p>
            </AnchorLink>
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
            {/* <EthCard /> */}
            <img
              src={WelcomPageImage}
              alt="welcome-page-image"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden md:block blue-glassmorphism border-0 rounded-none mt-6 py-8 shadow-y-shadow">
        <div className="mx-auto w-5/6 flex align-center">
          <div className="flex w-full items-center justify-between gap-8">
            <img src={Ethereum} alt="ethereum" className="h-14 cursor-pointer opacity-80"/>
            <img src={Avalanche} alt="avalanche" className="h-14 cursor-pointer opacity-80"/>
            <img src={Polygon} alt="polygon" className="h-14 cursor-pointer opacity-80"/>
            <img src={BinanceSC} alt="binance-smart-chain" className="h-14 cursor-pointer opacity-80"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
