import React, { useState } from "react";
import ImageCarrousel from "../../global/ImageCarrousel";
import { Progress, TextInput } from "flowbite-react";
import { FaEthereum } from "react-icons/fa";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const ProjectComponent = () => {
  const { BuyProject } = useContext(TransactionContext);
  const [amount, setAmount] = useState(0)

  return (
    <div className="flex flex-col md:p-12 mf:py-12 py-10 w-11/12 mf:w-10/12 mb-10 blue-glassmorphism text-white">
      <h1 className="text-white text-4xl sm:text-5xl pt-5 sm:py-2 text-gradient text-center md:text-start font-semibold -my-10 md:my-0">
        Selected Project
      </h1>
      <div className="flex flex-col mf:flex-row mf:justify-between items-center mf:items-start gap-5 mf:pt-5">
        {/* Project images */}
        <div className="basis-4/5">
          <ImageCarrousel />
          {/* Project info */}
          <div className="flex w-full md:mt-5 ">
            <p className="mt-1 text-white text-base mf:text-base px-5 sm:px-0">
              Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus. Donec rutrum congue leo
              eget malesuada. Sed porttitor lectus nibh. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Curabitur
              aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Quisque velit nisi, pretium ut lacinia in, elementum id
              enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
              sem. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. <br /> <br />
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
              accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim. Donec rutrum congue leo eget malesuada. Donec
              rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Donec sollicitudin molestie
              malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
            </p>
          </div>
        </div>
        {/* Invest info */}
        <div className=" w-11/12 sm:basis-2/5 white-glassmorphism flex flex-col justify-center items-end h-fit p-5 gap-4">
          <h3 className="text-xl">
            Goal: <span className="text-2xl font-bold">10.000$</span>
          </h3>
          <h3 className=" text-xl">
            ARP: <span className="text-2xl font-bold">10%</span>
          </h3>
          <div className="flex flex-col w-full mt-3 text-end relative">
            <Progress progress={45} size="xl" color="dark" />
            <p className="text-sm absolute right-2 top-[2px]">45%</p>
          </div>
          <div className="flex flex-col gap-2 items-end my-3">
            <p className="text-sm">10 Investors</p>
            <p className="text-sm">10 Days Remaining</p>
            <p className="text-sm">
              Repayment Date:{" "}
              <span className="font-bold">February 31, 2023</span>
            </p>
          </div>
          <div className="mb-3">
            <TextInput
              id="amount"
              type="number"
              icon={FaEthereum}
              placeholder="Amount"
              required={true}
              min="0"
              className="w-40"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            className="bg-[#2952e3] w-full py-4 px-7 rounded-full cursos-pointer hover:bg-[#2546bd]"
            onClick={() => BuyProject(amount)}
          >
            <p className="text-2xl text-white font-bold">Buy Project</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
