import BlogGrid from "../sections/blog/BlogGrid";
import { BlogHero } from "../sections/blog/BlogHero";
import BlogIntro from "../sections/blog/BlogIntro";
import LoadMore from "../sections/blog/LoadMore";

export default function Blog() {
  return (
    <>
      <BlogHero />
      <BlogIntro />
      <BlogGrid />
      <LoadMore />
    </>
  );
}
