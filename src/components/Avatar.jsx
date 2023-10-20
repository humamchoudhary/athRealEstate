import Image from "next/image";
import React from "react";

function Avatar({ src, alt, style }) {
  return (
    <div
      className={` relative w-24 h-24 rounded-full overflow-hidden ${style}`}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
}

export default Avatar;
