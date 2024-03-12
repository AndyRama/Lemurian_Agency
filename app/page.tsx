import Hero from "./components/Hero";
import CardDescription from "./components/CardDescription";
import Client from "./components/Client";
import RecentProject from "./components/RecentProject";
import Stats from "./components/Stats";
import RecentBlog from "./components/RecentBlog";
import HowIWork from "./components/HowIWork";
import Subscribes from "./components/Subscribes";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-32 lg-pb:10" />
      <Client className="mt-28 pt-22" />
      <CardDescription className="pt-14" />
      <RecentProject className="mt-28 pt-22" />
      <Stats className="pt-20 pb-20 bg-white" />
      <HowIWork className="py-32 !pt-32 lg:py-32" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <Subscribes className="py-16 pt-64 -mt-48 lg:py-32 bg-orange-300" />
    </>
  );
}
