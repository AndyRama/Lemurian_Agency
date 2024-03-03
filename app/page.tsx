import Image from "next/image";
import Hero from "./components/Hero";
import CardDescription from "./components/CardDescription";
import Stats from "./components/Stats";
import RecentProject from "./components/RecentProject";
import RecentBlog from "./components/RecentBlog";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-30 lg-pb:10" />
      <CardDescription className="md:pt-22 lg-pb:80" />
      <RecentProject className="py-6 lg:py-32" />
      <Stats />
      <RecentBlog />
    </>
  );
}
