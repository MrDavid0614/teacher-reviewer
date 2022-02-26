import { XIcon } from "@heroicons/react/outline";
import { Icon } from "@types";
import { useState } from "react";

interface Props {
  message: string;
  icon: Icon;
}

const Banner = ({ message, icon: IconElement }: Props) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-default-color rounded-md">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-gray-900 bg-opacity-50">
              <IconElement className="h-6 w-6 text-gray-50" />
            </span>
            <p className="ml-3 font-medium text-gray-50">
              {message}
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button type="button" onClick={() => setShow((prev) => !prev)} className="-mr-1 flex p-2 rounded-md text-gray-50 hover:bg-gray-50 hover:text-default-color focus:outline-none focus:ring-2 focus:ring-gray-50 sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
