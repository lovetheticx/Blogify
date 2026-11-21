import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../assets/hero.jpg";
import FeatureSection from "../components/FeatureSection";

function Home() {
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
    </>
  );
}

export default Home;
