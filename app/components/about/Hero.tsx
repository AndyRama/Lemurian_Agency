"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutContent {
  heading: {
    title: string;
    subTitle: string;
  };
}

const aboutContent: AboutContent = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: "About Us",
  },
};

interface HeroProps {
  className?: string;
  title?: string;
  subTitle?: string;
}

const Hero: React.FC<HeroProps> = ({ className, title, subTitle }) => {
  title = title ?? aboutContent.heading.title;
  subTitle = subTitle ?? aboutContent.heading.subTitle;

  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
          {/* Content cneter - subtitle */}
          <div className="text-center lg:max-w-3xl mx-auto">
            {subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.03, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
              >
                {subTitle}
              </motion.span>
            )}

            {/* Content center - title */}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.06, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl"
              >
                {title}
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
