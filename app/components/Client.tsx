"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import logo1 from "./../../public/images/logo.jpg";
import logo2 from "./../../public/images/logo.jpg";
import logo3 from "./../../public/images/logo.jpg";
import logo4 from "./../../public/images/logo.jpg";
import logo5 from "./../../public/images/logo.jpg";
import logo6 from "./../../public/images/logo.jpg";

interface ClientProps {
  className?: string;
}

const clientContent = {
  intro: {
    subTitle: "les partenaires",
    title: "ils m'ont fait confiance",
    description:
      "Je réalise au quotidien des projets pour des startups, PME, éditeurs de logiciels.",
  },
  logos: [logo1, logo2, logo3, logo4, logo5, logo6],
};

const Client: React.FC<ClientProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-2">
          <div className="w-full lg:w-7/12 lg:flex gap-0 items-center mb-20 lg:mb-0 ">
            <div className="lg:w-7/12">
              {clientContent.intro.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                >
                  {clientContent.intro.subTitle}
                </motion.span>
              )}
              {clientContent.intro.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-4 lg:mb-0 "
                >
                  {clientContent.intro.title}
                </motion.h2>
              )}
            </div>
            <div className="lg:w-5/12 self-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.15,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-gray-500"
              >
                {clientContent.intro.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-8/12 items-center justify-between mt-20 lg:mb-20">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {clientContent.logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll1 }}
              className="z-[2] relative bg-cover bg-center"
            >
              <Image src={logo} width={90} height={90} alt={`logo${index}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
