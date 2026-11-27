import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../assets/hero.jpg";
<<<<<<< HEAD
import PostCard from "../components/PostCard";
=======
>>>>>>> 4dfae2623bfaf1afdb540d9640140a9228da91b3
import FeatureSection from "../components/FeatureSection";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blogify-oquvchi.vercel.app/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 py-16 md:flex-row md:py-20">
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Create, Read,
              <span className="block text-violet-600">Inspire.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/posts"
                className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-indigo-700"
              >
                Explore Posts <FiArrowRight />
              </Link>
              <Link
                to="/login"
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full flex-1">
            <img
              src={heroImage}
              alt="Creators sharing ideas and learning together"
              className="w-full rounded-2xl bg-white object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <FeatureSection />
<<<<<<< HEAD

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Latest Posts
              </h2>
              <p className="mt-2 text-slate-500">
                Check out our most recent articles
              </p>
            </div>
            <Link
              to="/posts"
              className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 sm:flex"
            >
              View All <FiArrowRight />
            </Link>
          </div>

          {loading ? (
            <p className="text-center text-slate-500">Loading...</p>
          ) : (
            <div className="flex flex-wrap gap-5">
              {posts.slice(0, 3).map((post) => (
                <div key={post.id} className="w-full md:w-[31%]">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
=======
>>>>>>> 4dfae2623bfaf1afdb540d9640140a9228da91b3
    </>
  );
}

export default Home;
