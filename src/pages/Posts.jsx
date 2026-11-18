import { FiSearch } from "react-icons/fi";
import PostCard from "../components/PostCard";
import posts from "../data/posts";

function Posts() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 px-5 py-16 text-center md:py-20">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Explore Our Posts</h1>
        <p className="mt-3 text-lg text-slate-500">
          Discover amazing content from talented writers across various topics
        </p>
        <div className="mx-auto mt-7 flex max-w-lg items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-400">
          <FiSearch />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full text-sm text-slate-700 outline-none"
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-xl bg-slate-100 p-2">
          {["All", "Technology", "Productivity", "Design"].map((category, index) => (
            <span
              key={category}
              className={`rounded-lg px-5 py-2 text-sm ${
                index === 0 ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          {posts.map((post) => (
            <div key={post.id} className="w-full md:w-[31%]">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Posts;
