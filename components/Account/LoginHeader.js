import React from "react";
import Image from "next/image";
// import quotesImage from "../public/quotes.png";

const LoginHeader = () => {
  return (
    <div className="mt-20 flex flex-col items-center p-8 cursor-pointer rounded-xl mx-20">
      <Image
        src="/quotes.png"
        alt=""
        className="h-24 w-32"
        width={70}
        height={70}
        style={{
          filter: "brightness(0) invert(1)",
          zIndex: 100,
        }}
      />
      <h1
        className="px-12 py-5 font-serif font-black text-2xl text-white text-center"
        style={{
          filter: "brightness(0) invert(1)",
          zIndex: 100,
        }}
      >
        Freelancing and blockchain: <br /> Where talent meets trust in a <br /> decentralized world, shaping <br /> the future of work.
      </h1>
      <span className="w-16 border-b-4 mt-2 rounded-full border-white"></span>
    </div>
  );
};

export default LoginHeader;
