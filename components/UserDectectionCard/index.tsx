/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface UserDetectionCardProps {
  FileKey?: string;
  PeopleName: string;
}

const UserDetectionCard: FC<UserDetectionCardProps> = ({
  FileKey,
  PeopleName,
}) => {
  const isError = PeopleName === "No Data";
  return (
    <div>
      <div
        className={`rounded-lg bg-gray-300 dark:bg-gray-800 shadow ${
          !FileKey && "animate-pulse"
        }
      ${isError ? "border-red-500" : "border-green-400"}
      `}
      >
        {FileKey && (
          <img
            src={`https://d121x775m9die3.cloudfront.net/${FileKey}`}
            alt="public-photo"
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default UserDetectionCard;
