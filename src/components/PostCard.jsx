import { FiArrowRight, FiCalendar } from "react-icons/fi";

function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-48 bg-violet-50">
        <img src={post.image} alt="" className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <FiCalendar />
          {post.date}
        </p>
        <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
        <p className="mt-2 text-sm leading-5 text-slate-500">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
          Read more <FiArrowRight />
        </span>
      </div>
    </article>
  );
}

export default PostCard;
