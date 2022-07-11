import Image from "next/image";
import React from "react";
import { FaAccusoft } from "react-icons/fa";

const index = () => {
  // add OverLay
  // Make Sign in with Google
  // Change Icon

  return (
    <div>
      <div>
        <Image src="/images/about.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-center absolute z-10 centerItemsCustom">
        <div className="flex items-center gap-5 cursor-pointer rounded-full w-fit p-5 text-backLightDark bg-white font-krona shadow-lg">
          <FaAccusoft className="text-xl" />
          login with Google account
        </div>
      </div>
    </div>
  );
};

export default index;
