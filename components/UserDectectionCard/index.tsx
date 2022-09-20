import { FC } from "react";

interface UserDetectionCardProps {
    FileKey?: string;
}

const UserDetectionCard: FC<UserDetectionCardProps> = ({ FileKey }) =>
    <div className="">
        <div className={`max-w-sm rounded bg-gray-300 dark:bg-gray-800 shadow ${!FileKey && "animate-pulse"}`}>
            {FileKey && <img src={`https://d121x775m9due3.cloudfront.net/${FileKey}`} alt="public-photo" className="w-full" />}
        </div>
    </div>


export default UserDetectionCard;