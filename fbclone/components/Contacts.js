import React from "react";
import Image from "next/image";

function Contacts({ src, name }) {
  return (
    <div
      className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200
    cursor-pointer p-2"
    >
      <Image
        src={src}
        height={50}
        width={50}
        className="rounded-full "
        layout="fixed"
        objectFit="cover"
      />
      <p>{name}</p>
      <div
        className="absolute button-2 left-7 bg-green-400 h-3 w-3 
      rounded-full"
      ></div>
    </div>
  );
}

export default Contacts;
