import { FC } from "react";

const Loader: FC = () => (
  <div className="rounded-lg overflow-hidden w-56 bg-opacity-90 bg-gray-900">
    <div className="h-40 bg-gray-300 flex flex-col space-y-3 p-3">
      <div className="h-24 rounded-lg animate-pulse bg-gray-200"></div>
      <div className="h-16 rounded-lg animate-pulse bg-gray-200"></div>
    </div>
  </div>
);

export default Loader;
