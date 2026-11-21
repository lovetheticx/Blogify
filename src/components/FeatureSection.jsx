import Feature from "./Feature";
import features from "../data/features";

function FeatureSection() {
  return (
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
        {features.map((feature) => (
          <Feature
            key={feature.title}
            icon={<feature.icon />}
            title={feature.title}
          >
            {feature.description}
          </Feature>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
