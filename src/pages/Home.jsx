import { Link } from "react-router-dom";
import { FiArrowRight, FiShield, FiSettings, FiZap } from "react-icons/fi";
import heroImage from "../assets/hero.jpg";

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

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Blogify?
          </h2>
          <p className="mt-3 text-slate-500">
            Built with modern technologies and best practices to provide the
            best blogging experience.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Feature icon={<FiZap />} title="Fast">
            Lightning-fast performance with modern web technologies for the best
            reading experience.
          </Feature>
          <Feature icon={<FiShield />} title="Secure">
            Your data is protected with industry-standard security practices and
            encryption.
          </Feature>
          <Feature icon={<FiSettings />} title="Easy to Manage">
            Intuitive admin dashboard makes content management effortless and
            enjoyable.
          </Feature>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, children }) {
  return (
    <article className="w-full rounded-xl border border-slate-200 bg-white p-6 sm:w-80">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-xl text-indigo-600">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-5 text-slate-500">{children}</p>
    </article>
  );
}

export default Home;
