"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  BiPaintRoll,
  BiNote,
  BiLayer,
  BiCog,
  BiAt,
  BiCrop,
} from "react-icons/bi";

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  btn: {
    href: string;
    label: string;
  };
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  btn: {
    href: string;
    label: string;
  };
}

interface HowIWorkContent {
  heading: {
    title: string;
    subTitle: string;
    description: string;
  };
  step: Step[];
  features: Feature[];
}

const HowIWorkContent: HowIWorkContent = {
  heading: {
    title: "When creativity meets developement web",
    subTitle: "Service",
    description:
      "Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots ! Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
  },
  step: [
    {
      number: "01",
      icon: BiLayer,
      title: "Project Initial",
      description:
        "Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "02",
      icon: BiPaintRoll,
      title: "Conception design",
      description:
        " Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "03",
      icon: BiNote,
      title: "Project performance",
      description:
        " Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "04",
      icon: BiAt,
      title: "Project performance",
      description:
        " Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
  features: [
    {
      icon: BiNote,
      title: "Cahier des charges",
      description:
        "Dans un premier temps, nous allons discuter assez longuement afin de définir le besoin exact",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiLayer,
      title: "Développement",
      description:
        "nous établirons ensuite la liste la plus exhaustive possible des fonctionnalités de l'application.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiCog,
      title: "pre-Production",
      description:
        "Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients. Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiAt,
      title: "Production",
      description:
        "Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients. Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
};

interface HowIWorkProps {
  className?: string;
}

const HowIWork: React.FC<HowIWorkProps> = ({ className }) => {
  return (
    <>
      {/* Content left - subtitle */}
      <section className={` ${className}`}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                {HowIWorkContent.heading.subTitle && (
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
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                  >
                    {HowIWorkContent.heading.subTitle}
                  </motion.span>
                )}

                {HowIWorkContent.heading.subTitle && (
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
                    className="text-2xl lg:text-4xl text-black"
                  >
                    {HowIWorkContent.heading.title}
                  </motion.h2>
                )}
              </div>

              <div className="lg:w-5/12 self-end">
                {HowIWorkContent.heading.description && (
                  <ul>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.6,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      className="text-black"
                    >
                      {HowIWorkContent.heading.description}
                    </motion.li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:w-10/12 mx-auto">
            {HowIWorkContent.step.map((step, index) => {
              index *= 0.2;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  key={step.title}
                  whileHover={{ y: -10, transition: { duration: 0.1 } }}
                  className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white
                  relative overflow-hidden hover:bg-[#fb9725] hover: shadow-2xl rounded-md"
                >
                  <span
                    className="text-[200px] inline-block z-[1] font-semibold
                    absolute -top-[120px] opacity-5 left-0 leading-0"
                  >
                    {step.number}
                  </span>
                  <div className="absolute top-10 right-10">
                    <span
                      className="text-3xl text-orange-400 duration-300 transition-all
                    ease_in_out group-hover:text-white"
                    >
                      <step.icon />
                    </span>
                  </div>
                  <div className="relative z-40 flex gap-3 items-start">
                    <div
                      className="font-semibold duration-300 transistion-all ease-in-out
                      group-hover:text-white group-hover:text-opacity-50"
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3
                        className="text-[18px] mb-4 duration-300 transistion-all ease-in-out
                        group-hover:text-white"
                      >
                        {step.title}
                      </h3>
                      <p
                        className="leading-relaxed text-[15px] text-gray-500 mb-7
                        duration-300 transistion-all ease-in-out group-hover:text-white"
                      >
                        {step.description}
                      </p>
                      <Link
                        href={step.btn.href}
                        className={`text-[12px] tracking-[2px] uppercase
                          pb-2 inline-block  duration-300 transistion-all bg-white-600
                          ease-in-out relative before:content-['']
                          before:absolute before:bottom-0 before:left-0 before:w-full
                          before:h-[2px] before:bg-orange-400 before:origin-[100%, 50%]
                          before:transistion-all before:duration-300 before:ease-in-out
                          before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                          before:wil-change-transform hover:before:origin-[100%, 0%]
                          hover:before:scale-x-[1] hover:before:scale-y-[1]
                          hover:before:scale-z-[1]`}
                      >
                        {step.btn.label}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="pt-22 lg:pt-30 pb-10  bg-orange-400">
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {HowIWorkContent.features.map((feature, index) => {
                  index *= 0.2;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      key={feature.title}
                      className="relative z-40 flex gap-3 items-start"
                    >
                      <div>
                        <span className="text-3xl text-white">
                          <feature.icon />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg mb-4 text-white">
                          {feature.title}
                        </h3>
                        <p className="leading-relaxed text-[15px] text-white text-opacity-75 mb-7">
                          {feature.description}
                        </p>
                        <p>
                          <Link
                            href={feature.btn.href}
                            className={`text-[12px] tracking-[2px] uppercase pb-2 inline-block duration-300 transition-all bg-white-600 ease-in-out relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-orange-100 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z[1] before:wil-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1]`}
                          >
                            {feature.btn.label}
                          </Link>
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HowIWork;
