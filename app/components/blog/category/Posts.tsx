"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

interface Category {
  title: string;
}

interface Post {
  title: string;
  date: string;
  author: string;
  url: string;
  image: string;
  categories?: Category[];
}

interface PostsProps {
  className?: string;
  itemsPerPage: number;
  archive?: boolean;
  params?: any;
}

const Items: React.FC<{ currentItems: Post[] }> = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((post, index) => {
        index *= 0.05;
        return (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index,
                duration: 0.3,
              },
            }}
            viewport={{ once: true }}
            className="bg-white relative overflow-hidden group rounded-md"
          >
            <Link href={`/${post.url}`} passHref>
              <Link className="relative block overflow-hidden" href={""}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[200px] duration-300
                    transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md"
                />
                <div className="p-8">
                  <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
                    {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
                  </p>
                  <h3 className="mb-4">
                    <Link
                      href={`/${post.url}`}
                      className="text-lg leading-none"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p>
                    <Link
                      href={`/${post.url}`}
                      className={`text-[12px] tracking-[2px] uppercase
                        pb-2 inline-block  duration-300 transition-all bg-white-600
                        ease-in-out relative before:content-['']
                        before:absolute before:bottom-0 before:left-0 before:w-full
                        before:h-[2px] before:bg-orange-600 before:origin-[100%, 50%]
                        before:transition-all before:duration-300 before:ease-in-out
                        before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                        before:wil-change-transform hover:before:origin-[100%, 0%]
                        hover:before:scale-x-[1] hover:before:scale-y-[1]
                        hover:before:scale-z-[1]`}
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </Link>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

const Posts: React.FC<PostsProps> = ({
  className,
  itemsPerPage,
  archive = false,
  params,
}) => {
  const [currentItems, setCurrentItems] = useState<Post[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [clickPaginate, setClickPaginate] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let items: Post[] | null = null;

    if (!archive) {
      items = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date)),
      );
    } else {
      if (params?.slug) {
        items = allPosts.filter((post) =>
          post.categories?.some(
            (category) =>
              category.title
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "") === params.slug,
          ),
        );
      }
    }

    if (!items) return;

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clickPaginate) {
      setTimeout(function () {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 300);
      setClickPaginate(false);
    }
  }, [archive, params, itemOffset, itemsPerPage, clickPaginate]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * itemsPerPage) % (currentItems.length || 0);
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Items currentItems={currentItems} />
        </div>

        <div className="lg:w-10/12 mx-auto flex flex-wrap">
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Posts;
