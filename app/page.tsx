import Hero from "./components/Hero";
import CardDescription from "./components/CardDescription";
import Stats from "./components/Stats";
import RecentProject from "./components/RecentProject";
import RecentBlog from "./components/RecentBlog";
import HowIWork from "./components/HowIWork";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-32 lg-pb:10" />
      <RecentProject className="mt-28 pt-22" />
      <Stats />
      <CardDescription className="pt-14" />
      <HowIWork className="py-32 !pt-32 lg:py-32" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
    </>
  );
}
