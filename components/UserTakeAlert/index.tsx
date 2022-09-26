import { FC } from "react";

interface UserTakeAlertProps {
  Id?: string;
  PeopleName?: string;
  Quantity?: number;
  Timestamp?: number;
  Action?: string;
}

const UserTakeAlert: FC<UserTakeAlertProps> = ({
  PeopleName,
  Quantity,
  Timestamp,
  Action,
}) => {
  const isError = PeopleName === "No Data";
  const logo = isError ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="currentColor"
    >
      <path
        className="heroicon-ui"
        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
      />
    </svg>
  );

  return (
    <div>
      <div
        id="alert"
        className="bg-white py-4 md:py-0 dark:bg-gray-800 shadow rounded inline-flex flex-col items-center md:flex-row  justify-between relative"
      >
        <div className="flex items-center space-x-3 md:flex-row mr-3">
          <div className="mr-3 p-4 bg-green-400 rounded md:rounded-tr-none md:rounded-br-none text-white">
            {logo}
          </div>
          <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
          <p className="text-sm lg:text-base dark:text-gray-400 text-gray-600 sm:mb-0 mb-2 text-center sm:text-left">
            {isError ? "Invalid User" : PeopleName} has {Action} {Quantity}
          </p>
          <div className="bg-gray-200 text-gray-900 dark:border-gray-700 h-8 px-3 md:mb-0 rounded-md flex items-center justify-center">
            <span className="text-xs font-normal">
              {Timestamp ? new Date(Timestamp).toLocaleString() : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTakeAlert;
