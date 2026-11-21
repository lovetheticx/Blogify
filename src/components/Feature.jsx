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

export default Feature;
