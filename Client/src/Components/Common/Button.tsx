import { Link } from "react-router-dom";
import { buttonType } from "../../Services/types";

const Button = ({ onClick, children, path }: buttonType) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="text-gray-800 leading-[24px] border-white border-2 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      {children}
    </Link>
  );
};

export default Button;
