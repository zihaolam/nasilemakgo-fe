/* eslint-disable @next/next/no-img-element */
import { FC, ReactNode } from "react";

interface ImageLoaderProps {
  onLoad: () => void;
  src: string;
  alt?: string;
  className?: string;
  isLoading?: boolean;
  FallbackComponent: FC;
}

const ImageLoader: FC<ImageLoaderProps> = ({
  onLoad,
  src,
  alt = "Loaded Image",
  className = "",
  isLoading = true,
  FallbackComponent,
}) => {
  return (
    <>
      {isLoading && <FallbackComponent />}
      <img
        ref={(input) => {
          if (!input) {
            return;
          }
          const img = input;

          const updateFunc = () => {
            onLoad();
          };
          img.onload = updateFunc;
          if (img.complete) {
            onLoad();
          }
        }}
        onLoad={onLoad}
        className={
          className + `${isLoading ? "opacity-0" : "opacity-100"} duration-200`
        }
        src={src}
        alt={alt}
      />
    </>
  );
};

export default ImageLoader;
