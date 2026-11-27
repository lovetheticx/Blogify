import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

function CreatePost() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Create New Post</h1>
        <p className="mt-1 text-sm text-slate-500">
          Fill in the details to create a new blog post
        </p>
      </div>

      <form className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <div>
            <label
              htmlFor="post-title"
              className="block text-sm font-medium text-slate-700"
            >
              Post Title
            </label>
            <input
              id="post-title"
              type="text"
              placeholder="Enter post title..."
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="post-content"
              className="block text-sm font-medium text-slate-700"
            >
              Content
            </label>
            <textarea
              id="post-content"
              rows={13}
              placeholder="Write your post content here..."
              className="mt-2 w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Post Settings</h2>
            <div className="mt-4">
              <label
                htmlFor="post-category"
                className="block text-sm font-medium text-slate-700"
              >
                Category
              </label>
              <select
                id="post-category"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-400"
              >
                <option value="">Select category</option>
                <option value="Technology">Technology</option>
                <option value="Productivity">Productivity</option>
                <option value="Design">Design</option>
              </select>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Featured Image</h2>
            <div className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 px-4 py-8 text-center hover:border-indigo-400">
              <FiUpload className="text-2xl text-slate-400" />
              <p className="mt-3 text-xs font-medium text-slate-600">
                Click to upload or drag and drop
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                PNG, JPG or WEBP
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex-1 cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Publish Post
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="cursor-pointer rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
