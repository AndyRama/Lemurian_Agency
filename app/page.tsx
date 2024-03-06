import Hero from "./components/Hero";
import CardDescription from "./components/CardDescription";
import Stats from "./components/Stats";
import RecentProject from "./components/RecentProject";
import RecentBlog from "./components/RecentBlog";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-30 lg-pb:10" />
      <RecentProject className="pt-22" />
      <Stats />
      <CardDescription className="pt-14" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
    </>
  );
}
