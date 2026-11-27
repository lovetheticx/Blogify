import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiUser } from "react-icons/fi";
import PostCard from "../components/PostCard";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`https://blogify-oquvchi.vercel.app/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.post);
        setRelated(data.related || []);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center text-slate-500">
        Loading post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-slate-600">Post not found.</p>
        <Link
          to="/posts"
          className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-600"
        >
          <FiArrowLeft /> Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <Link
          to="/posts"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600"
        >
          <FiArrowLeft /> Back to Posts
        </Link>

        <div className="mt-7">
          <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
            {post.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <FiUser />
              {post.author || "Admin"}
            </span>
            <span className="flex items-center gap-1.5">
              <FiCalendar />
              {post.createdAt ? post.createdAt.slice(0, 10) : ""}
            </span>
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 h-64 w-full rounded-xl object-cover shadow-sm md:h-96"
        />

        <div className="mt-8">
          {(post.content || "").split("\n").map((line, index) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="mt-6 mb-2 text-xl font-bold text-slate-900"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line === "") {
              return null;
            }
            return (
              <p key={index} className="mt-3 leading-7 text-slate-600">
                {line}
              </p>
            );
          })}
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50 py-14">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.slice(0, 2).map((item) => (
                <PostCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PostDetail;
