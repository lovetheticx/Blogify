import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../components/Logo";
import loginImage from "../assets/login.jpg";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    fetch("https://blogify-oquvchi.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        } else {
          setError(data.message || "Invalid login or password");
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong. Try again.");
      });
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Logo />
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600"
          >
            <FiArrowLeft /> Back to Home
          </Link>
          <div className="mt-7 rounded-xl border border-slate-200 p-7 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-slate-500">
              Enter your credentials to access your account
            </p>

            {error && (
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-6">
              <label
                htmlFor="login"
                className="text-sm font-medium text-slate-700"
              >
                Login
              </label>
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="login"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none focus:border-indigo-400"
              />

              <label
                htmlFor="password"
                className="mt-5 block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none focus:border-indigo-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <span className="text-indigo-600">Sign up</span>
            </p>
          </div>
        </div>
      </section>

      <section className="hidden flex-1 flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-purple-50 px-10 py-12 text-center lg:flex">
        <img
          src={loginImage}
          alt="A purple lock illustration"
          className="w-full max-w-md rounded-xl shadow-xl"
        />
        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Start Your Journey
        </h2>
        <p className="mt-3 text-slate-500">
          Join thousands of creators sharing their stories on Blogify
        </p>
      </section>
    </div>
  );
}

export default Login;
