import React from "react";
import Image from "next/image";
export default function TicketerLogo({ width, height }) {
  let imageWidth;

  if (width) {
    imageWidth = width;
  }

  let imageHeight;

  if (height) {
    imageHeight = height;
  }

  return (
    <Image
      src="/ticketerLogo.jpg"
      alt="me"
      width={imageWidth}
      height={imageHeight}
      className="rounded-lg"
    />
  );
}
