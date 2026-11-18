import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-lg font-bold text-violet-600">
      <FiEdit className="text-xl" />
      Blogify
    </Link>
  );
}

export default Logo;
