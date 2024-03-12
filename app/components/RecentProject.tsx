"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Swiper {
  swiper: any;
  swiperMethod: () => void;
}

interface RecentProjectProps {
  className?: string;
}

interface RecentProjectContent {
  heading: {
    title: string;
    subTitle: string;
  };
  main: {
    title: string;
  };
  btn: {
    href: string;
    label: string;
  };
  recentProjects: RecentProject[];
}

interface RecentProject {
  img: string;
  title: string;
  name: string;
  role: string;
  years: string;
  quote: string;
  type: string;
}

const recentProjectContent: RecentProjectContent = {
  heading: {
    title: "Réalisations Éffectuées",
    subTitle: "Mes Expériences",
  },
  btn: {
    href: "/projects",
    label: "projets",
  },
  main: {
    title: "Les Projets",
  },
  recentProjects: [
    {
      img: "/images/desktop.jpg",
      title: "Unlcoaching.com",
      years: "Fev. 2024",
      type: "Création du site",
      name: "Jeremy Prat",
      role: "Coach Sportif",
      quote:
        "Working with Lemurian was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to detail and creativity exceeded our expectations.",
    },
    {
      img: "/images/desktop.jpg",
      title: "Fille-de-la-grace.com",
      years: " Mars 2024",
      type: "Refonte du site",
      name: "Fara Rabefary",
      role: "Designe interieur",
      quote:
        "I've had the privilege of partnering with Lemurian on several projects. Their ability to combine functionality, aesthetics, and sustainability in their designs is truly remarkable. Their spaces provide the perfect canvas for interior design excellence.",
    },
    {
      img: "/images/desktop.jpg",
      title: "VanilleB2B.com",
      years: " Mars 2024",
      type: "Refonte du site",
      name: "Honoré Rabefary",
      role: "Landscape Architect",
      quote:
        "Collaborating with Lemurian on projects has been a rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow, has elevated the overall design and user experience.",
    },
    {
      img: "/images/desktop.jpg",
      title: "MarketPlace.com",
      years: " Avr. 2024",
      type: "Création du site",
      name: "Fara Rabefary",
      role: "Designe interieur",
      quote:
        "Collaborating with Lemurian on projects has been a rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow, has elevated the overall design and user experience.",
    },
    {
      img: "/images/desktop.jpg",
      title: "app.Unlcoaching.com",
      years: " Sept. 2024",
      type: "Création du site ",
      name: "Jeremy Prat",
      role: "Coach Sportif",
      quote:
        "Working with Lemurian was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to detail and creativity exceeded our expectations.",
    },
    {
      img: "/images/desktop.jpg",
      title: "Lemurian-agency.com",
      years: "Fev. 2024",
      type: "Création du site",
      name: "Andy Ramaroson",
      role: "Développeur Fullstack Js",
      quote:
        "Working with Lemurian was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to detail and creativity exceeded our expectations.",
    },
  ],
};

const RecentProject: React.FC<RecentProjectProps> = ({ className }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const sliderRef = useRef<Swiper>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setIsEnd(sliderRef.current.swiper.isEnd);
      setIsBeginning(sliderRef.current.swiper.isBeginning);
    }
  }, []);

  const prevHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  }, []);

  const nextHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 flex gap-0 items-center">
            <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto">
              {recentProjectContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
                >
                  {recentProjectContent.heading.subTitle}
                </motion.span>
              )}

              {recentProjectContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-10 "
                >
                  {recentProjectContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
          <div>
            {/*  Content left - btn Right  */}
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
            <Link
              href={recentProjectContent.btn.href}
              className="transistion-all duration-300 ease-in-out text-[11.5px]
                      tracking-[2px] font-bold uppercase bg-orange-400 py-2 lg:py-4 px-5
                      rounded text-white inline-block items-end hover:bg-white hover:text-orange-400
                      hover:shadow-1xl"
            >
              {recentProjectContent.btn.label}
            </Link>
            </motion.div>
          </div>
        </div>

        <div className="lg: flex justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 lg:flex gap-0 items-center"
          >
            <Swiper
              ref={sliderRef}
              speed={700}
              spaceBetween={30}
              onSlideChangeTransitionEnd={(swiper) =>
                setSlideIndex(swiper.realIndex)
              }
              className="z-50 py-32 mb-7 relative flex items-center"
            >
              {recentProjectContent.recentProjects.map(
                (recentProject, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="block md:flex overflow-y-visible items-stretch bg-white">
                      <div className="md:w-4/12">
                        <Image
                          src={recentProject.img}
                          alt={recentProject.name}
                          width={379}
                          height={320}
                          className="object-cover object-center !h-full !w-full rounded-md"
                        />
                      </div>
                      <div className="md:w-8/12 p-7 md:p-16 flex items-center">
                        <div>
                          <h2 className=" text-2xl text-orange-400 block">
                            {recentProject.title}
                          </h2>
                          <div className="flex space-x-2 text-sm">
                            <span>{recentProject.type}</span>
                            <span>&mdash;</span>
                            <p className="mb-4">{recentProject.years}</p>
                          </div>
                          <blockquote className="text-lg mb-4 text-gray-500">
                            {recentProject.quote}
                          </blockquote>
                          <p>
                            <strong>{recentProject.name}</strong>
                          </p>
                          <p>{recentProject.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex space-x-3">
            <div
              onClick={prevHandler}
              className={`${
                isBeginning
                  ? "opacity-30 bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "opacity-100 bg-orange-400 text-white cursor-pointer"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white`}
              />
            </div>

            <div
              onClick={nextHandler}
              className={`${
                isEnd
                  ? "opacity-30 bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "opacity-100 bg-orange-400 text-white cursor-pointer"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProject;
