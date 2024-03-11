"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

interface StatsProps {
  className?: string;
}

interface Stat {
  number: string;
  label: string;
}

interface CTA {
  cta_href: string;
  cta_label: string;
}

interface GetStarted {
  heading: string;
  description: string;
  image: string;
  cta: CTA;
}

interface StatContent {
  stats: Stat[];
  getStarted: GetStarted;
}

const statContent: StatContent = {
  stats: [
    {
      number: "6",
      label: "Projets achevés",
    },
    {
      number: "1",
      label: "Années d'expérience",
    },
    {
      number: "2",
      label: "Cafés par jour",
    },
    {
      number: "4",
      label: "Clients",
    },
  ],
  getStarted: {
    heading: "Une idée, un projet !",
    description:
      "Venez tout simplement en discuter car j'ai une passion pour les passions.",
    image: "/images/next-blog-article.jpg",
    cta: {
      cta_href: "https://calendly.com/lemurian-agency/30min",
      cta_label: "Discutons-en !",
    },
  },
};

const Stats: React.FC<StatsProps> = ({ className }) => {
  return (
    // <section className="">
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0 ">
          <div className="w-full lg:w-8/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {statContent.stats.map((stat, index) => (
                <div
                  className="text-center border rounded-lg m-5"
                  key={stat.label}
                >
                  <strong className="text-primary text-4xl xl:text-[52px] font-bold leading-tight">
                    {stat.number}
                  </strong>
                  <br />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <div className="bg-light lg:px-10 md:!pr-32 lg:!pr-40 rounded-lg relative">
              {statContent.getStarted.heading && (
                <h3 className="text-heading font-bold text-xl mb-3">
                  {statContent.getStarted.heading}
                </h3>
              )}

              {statContent.getStarted.description && (
                <p className="text-md mb-5 -w-[100]">
                  {statContent.getStarted.description}
                </p>
              )}

              {statContent.getStarted.cta.cta_label && (
                <Link href={statContent.getStarted.cta.cta_href} passHref>
                  <button
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                    tracking-[2px] font-bold uppercase bg-orange-400 py-4 px-5
                    rounded text-white inline-block hover:bg-white hover:text-orange-400
                    hover:shadow-2xl mb-5 mr-5"
                  >
                    <span>{statContent.getStarted.cta.cta_label}</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
