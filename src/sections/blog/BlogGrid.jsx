import { blogPosts } from "../../data/blog";

export default function BlogGrid() {
  return (
    <section className="bg-primary px-6 py-16 mb-12">
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(({ id, title, image }) => (
          <article
            key={id}
            className="rounded-xl flex flex-col overflow-hidden bg-background text-black hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 justify-between flex-1">
              <h3 className="font-semibold md:text-lg">
                {title}
              </h3>

              <button className="text-sm underline self-start hover:text-[#F16436]">
                READ MORE
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
