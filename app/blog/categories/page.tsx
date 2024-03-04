import React from "react";
import Hero from "../../components/about/Hero";
import Posts from "../../components/blog/Posts";

export const metadata = {
  title: "Blogs - Lemurian by Andy Ramaroson",
};

const Page: React.FC = () => {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Recent Updates" subTitle="My Blog" />
      <Posts className="pt-0 pb-52" itemsPerPage={9} />
    </>
  );
};

export default Page;
