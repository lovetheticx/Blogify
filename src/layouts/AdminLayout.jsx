import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiFileText, FiGrid, FiLogOut, FiPlus } from "react-icons/fi";
import Logo from "../components/Logo";

function AdminLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row">
      <aside className="flex w-full flex-col justify-between border-b border-slate-200 bg-white md:w-64 md:border-r md:border-b-0">
        <div>
          <div className="border-b border-slate-100 p-6">
            <Logo />
            <p className="mt-1 text-xs text-slate-500">Admin Panel</p>
          </div>

          <nav className="space-y-1 p-4">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  isActive
                    ? "bg-indigo-50 font-medium text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <FiGrid />
              Dashboard
            </NavLink>

            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  isActive
                    ? "bg-indigo-50 font-medium text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <FiFileText />
              Posts
            </NavLink>

            <NavLink
              to="/dashboard/create"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  isActive
                    ? "bg-indigo-50 font-medium text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <FiPlus />
              Create Post
            </NavLink>
          </nav>
        </div>

        <div className="border-t border-slate-100 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-red-50 hover:text-red-600"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
