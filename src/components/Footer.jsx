import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-violet-600">
              <FiEdit />
              Blogify
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Create, read, and inspire. Discover amazing stories written by talented creators
              from around the world.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Quick Links</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Connect</h2>
            <div className="mt-4 flex gap-5 text-lg text-slate-500">
              <FaTwitter />
              <FaGithub />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2025 Blogify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
