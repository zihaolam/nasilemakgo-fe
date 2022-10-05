/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import ImageLoader from "../ImageLoader";
import Loader from "./Loader";

interface SliderCardProps {
  Id: string;
  PeopleName: string;
  FileKey: string;
  Quantity: number;
}

const SliderCard: FC<SliderCardProps> = ({ FileKey, Quantity, PeopleName }) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  return (
    <div className="rounded-lg overflow-hidden w-56 bg-opacity-90 bg-gray-900">
      <ImageLoader
        src={`https://d121x775m9die3.cloudfront.net/${FileKey}`}
        className="object-cover w-full"
        alt="test"
        onLoad={() => setLoadingImage(false)}
        isLoading={loadingImage}
        FallbackComponent={() => (
          <div className="w-full h-24 bg-gray-200 animate-pulse"></div>
        )}
      />
      {loadingImage ? (
        <div className="bg-gray-200 animate-pulse w-full h-16"></div>
      ) : (
        <div className="bg-gray-300 shadow p-3 flex items-center justify-between">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={9} y1={15} x2={15} y2={9} />
                    <circle cx="9.5" cy="9.5" r=".5" />
                    <circle cx="14.5" cy="14.5" r=".5" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                </svg> */}
          <p className="mb-1 leading-5 text-gray-800 text-xs font-semibold max-w-[224px] text-ellipsis whitespace-nowrap">
            {PeopleName !== "No Data" ? PeopleName : "Unregistered User"} Taken{" "}
            {Quantity}
          </p>
          <img src="/nasi_lemak.png" className="w-8" alt="nasi lemak" />
        </div>
      )}
    </div>
  );
};

export default SliderCard;

// const SliderCard = () =>
//     <div className="rounded-xl overflow-hidden w-48 bg-opacity-90 bg-gray-900">
//         <div className="bg-indigo-700 shadow p-3 flex items-center justify-center">
//             {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                     <path stroke="none" d="M0 0h24v24H0z" />
//                     <line x1={9} y1={15} x2={15} y2={9} />
//                     <circle cx="9.5" cy="9.5" r=".5" />
//                     <circle cx="14.5" cy="14.5" r=".5" />
//                     <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
//                 </svg> */}
//             <h3 className="mb-1 leading-5 text-gray-800 font-bold rounded"><img src="/nasi_lemak.png" className="w-12 h-12" alt="nasi lemak" /></h3>
//             <div className="ml-6">
//                 <p className="text-gray-600 text-sm tracking-normal font-normal leading-5"></p>
//             </div>
//         </div>
//     </div>

// // <img src="/zi_hao.jpeg" alt="zihao" />

// export default SliderCard;
