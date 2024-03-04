import React from "react";
import { allPosts } from "contentlayer/generated";
import BlogContent from "./BlogContent";

interface Category {
  title: string;
}

interface Post {
  [x: string]: any;
  title: string;
  date: string;
  author: string;
  categories?: Category[];
  image: string;
  body: {
    code: string;
  };
}

interface BlogContentProps {
  post: Post;
}

export async function generateStaticParams() {
  const posts = await allPosts;

  return posts.map((post) => ({ slug: post.slug }));
}

interface GenerateMetadataParams {
  params: { slug: string };
}

export const generateMetadata = async ({ params }: GenerateMetadataParams) => {
  const posts = allPosts;
  const post = posts.find(
    (post) => post._raw.flattenedPath === "blog/" + params.slug,
  );
  return { title: post?.title, excerpt: post?.excerpt };
};

interface PageProps {
  params: { slug: string };
}

const page: React.FC<PageProps> = ({ params }) => {
  const posts = allPosts as Post[];
  const post = posts.find(
    (post) => post._raw.flattenedPath === "blog/" + params.slug,
  );

  if (!post) {
    return null;
  }

  return (
    <>
      <BlogContent post={post} />
    </>
  );
};

export default page;
