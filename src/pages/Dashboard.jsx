import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiFileText, FiLayers, FiTrendingUp, FiUsers } from "react-icons/fi";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://blogify-oquvchi.vercel.app/api/stats", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setStats(data);
          setRecentPosts(data.recentPosts || []);
        }
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <p className="text-slate-500">Loading dashboard...</p>;
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here's an overview of your blog.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-lg text-indigo-600">
              <FiFileText />
            </div>
            <span className="text-xs font-medium text-emerald-600">+12%</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">
            {stats ? stats.totalPosts : 0}
          </p>
          <p className="mt-1 text-xs text-slate-500">Total Posts</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-lg text-purple-600">
              <FiLayers />
            </div>
            <span className="text-xs font-medium text-emerald-600">+2</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">3</p>
          <p className="mt-1 text-xs text-slate-500">Categories</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-lg text-emerald-600">
              <FiTrendingUp />
            </div>
            <span className="text-xs font-medium text-emerald-600">+23%</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">
            {stats ? stats.totalViews : 0}
          </p>
          <p className="mt-1 text-xs text-slate-500">Total Views</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-lg text-violet-600">
              <FiUsers />
            </div>
            <span className="text-xs font-medium text-emerald-600">+8%</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">1.2K</p>
          <p className="mt-1 text-xs text-slate-500">Active Users</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">Recent Posts</h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage and monitor your latest content
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-medium text-slate-500">
                <th className="pb-3 pr-4">Title</th>
                <th className="pb-3 pr-4">Category</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentPosts.map((post) => (
                <tr key={post.id}>
                  <td className="py-4 pr-4 font-medium text-slate-900">
                    <Link
                      to={`/posts/${post.id}`}
                      className="hover:text-indigo-600"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="py-4 pr-4">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-slate-500">
                    {post.createdAt ? post.createdAt.slice(0, 10) : ""}
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        post.status === "Published"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button
                      type="button"
                      className="mr-3 cursor-pointer text-xs font-medium text-indigo-600"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer text-xs font-medium text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
