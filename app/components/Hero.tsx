"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  className?: string;
}

const heroContent = {
  intro: {
    subTitle: "Welcome",
    title: "Lemurian Agency",
    description:
      "Je suis Andy Ramaroson, un développeur FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies web modernes. Je suis spécialisé sur le langage  JavaScript avec le framework React & NextJs.",
    btn: {
      href: "/projects",
      label: "Get started",
    },
    btn1: {
      href: "/projects",
      label: "how it works?",
    },
  },
  images: {
    img1: "/images/person-1-min.jpg",
    img2: "/images/person-2-min.jpg",
    img3: "/images/person-3-min.jpg",
    img4: "/images/person-4-min.jpg",
    img5: "/images/person-5-min.jpg",
  },
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto ">
        <div className="lg:flex items-center justify-between">
          {/* Content left - subtitle */}
          <div className="lg:w-5/12 mb-10 lg:mb-10 mt-6">
            {heroContent.intro.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="inline-block py-0.5 pl-3 text-heading font-semibold
                  relative mb-7 before:content-[''] before:absolute before:w-2/3
                  before:bg-yellowLight before:left-0 before:top-0 before:bottom-0
                  before:z-[-1]"
              >
                {heroContent.intro.subTitle}
              </motion.span>
            )}

            {/* Content left - title */}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className=" text-gray-800 text-3xl sm:text-3xl md:text-4xl lg:text-5xl w-auto lg:w-screen max-w-xl mb-4 md:mb-7"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}

            {/* Content left - description */}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-lg
                    text-base lg:text-lg mb-10 lg:mb-16"
              >
                {heroContent.intro.description}
              </motion.p>
            )}

            {heroContent.intro.btn.label && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="btn-container"
              >
                {/* btn - left  */}
                <Link
                  href={heroContent.intro.btn.href}
                  className="transistion-all duration-300 ease-in-out text-[11.5px]
                    tracking-[2px] font-bold uppercase bg-orange-600 py-4 px-5
                    rounded text-white inline-block hover:bg-white hover:text-orange-600
                    hover:shadow-2xl mb-5 mr-5"
                >
                  {heroContent.intro.btn.label}
                </Link>

                {/* btn - right  */}
                <Link
                  href={heroContent.intro.btn1.href}
                  className="transistion-all duration-300 ease-in-out text-[11.5px]
                    tracking-[2px] font-bold uppercase bg-orange-600 py-4 px-5
                    rounded text-white inline-block hover:bg-white hover:text-orange-600
                    hover:shadow-2xl mb-5"
                >
                  {heroContent.intro.btn1.label}
                </Link>
              </motion.div>
            )}
          </div>

          {/* Image right - top left */}
          <div className="lg:w-6/12 space-y-2 mt-6">
            <div className="flex space-x-4 items-stretch">
              <motion.div
                className="w-8/12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={300}
                    height={250}
                    alt="Amelie"
                    className="object-cover h-full w-full rounded-md"
                  />
                )}
              </motion.div>

              {/* Image right - top center */}
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={heroContent.images.img2}
                        width={397}
                        height={406}
                        alt="Julie"
                        className="object-cover h-full w-full rounded-md"
                      />
                    </motion.div>
                  )}
                  {/* Image right - top right - icon */}
                  <div className="bg-orange-300 rounded-md rounded-tr-[180px] "></div>
                </div>

                {/* Image right - middle right */}
                {heroContent.images.img3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="Julie"
                      className="object-cover h-full w-full rounded-md"
                    />
                  </motion.div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  {/* Image right - bottom left - icon */}
                  <div className="bg-orange-300 rounded-md rounded-bl-[180px]"></div>

                  {/* Image right - bottom left */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                  >
                    {heroContent.images.img4 && (
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="andyramaroson.com"
                        className="object-cover h-full w-full rounded-md"
                      />
                    )}
                  </motion.div>
                </div>
              </div>
              <div className="w-5/12">
                <div className="grid grid-cols-2 gap-2">
                  {/* Image right - bottom right */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                  >
                    {heroContent.images.img5 && (
                      <Image
                        src={heroContent.images.img5}
                        width={394}
                        height={394}
                        alt="andyramaroson.com"
                        className="object-cover h-full w-full rounded-md"
                      />
                    )}
                  </motion.div>

                  {/* Image right - bottom right - icon */}
                  <div className="bg-green-200 rounded-md h-[100px] rounded-br-[180px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
