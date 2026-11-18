import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="flex items-center gap-7 text-sm font-medium text-slate-700">
          <NavLink to="/" className="hover:text-violet-600">
            Home
          </NavLink>
          <NavLink to="/posts" className="hover:text-violet-600">
            Posts
          </NavLink>
          <Link
            to="/login"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-white shadow-sm hover:bg-indigo-700"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
