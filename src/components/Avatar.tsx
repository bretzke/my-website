"use client";
import { defaultAvatarImage } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  size: "small" | "large";
  imageUrl: string;
  alt?: string;
  hasBorder?: boolean;
}

export default function Avatar({
  size,
  imageUrl,
  alt = "",
  hasBorder = false,
}: AvatarProps) {
  const [imgSrc, setImgSrc] = useState(
    imageUrl.length ? imageUrl : defaultAvatarImage
  );

  const imageSize =
    size === "small"
      ? { div: "min-h-12 h-12 min-w-12 w-12", image: { width: 48, height: 48 } }
      : {
          div: "min-h-36 h-36 min-w-36 w-36",
          image: { width: 144, height: 144 },
        };

  const handleOnError = () => {
    setImgSrc(defaultAvatarImage);
  };

  return (
    <div
      className={`rounded-full relative overflow-hidden flex ${imageSize.div}${
        hasBorder ? " border-2 border-solid border-secondary" : ""
      }`}
    >
      <Image
        src={imgSrc}
        alt={alt}
        onError={handleOnError}
        className=" border-none"
        quality={100}
        {...imageSize.image}
      />
    </div>
  );
}