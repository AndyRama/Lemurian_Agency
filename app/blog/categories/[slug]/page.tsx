import React from "react";
import { allPosts } from "contentlayer/generated";
import Hero from "./../../../components/about/Hero";
import Posts from "@/app/components/blog/category/Posts";

interface PageProps {
  params: {
    slug?: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const newTitle = params?.slug?.replace("-", " ") ?? "";
  let itemsTotal = 0;
  let items: any[] | null = null;

  if (params?.slug) {
    items = allPosts.filter((post) =>
      post.categories.some(
        (category) =>
          category.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "") === params.slug,
      ),
    );
    itemsTotal = items.length;
  }

  return (
    <>
      <Hero
        className="pt-52 pb-24 capitalize"
        title={`${newTitle} (${itemsTotal})`}
        subTitle="Category"
      />
      <Posts
        className="pt-0 pb-52"
        archive={true}
        params={params}
        itemsPerPage={6}
      />
    </>
  );
};

export default Page;
