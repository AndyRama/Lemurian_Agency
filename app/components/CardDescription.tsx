"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardDescriptionContent {
  heading: {
    title: string;
    subTitle: string;
  };
  content: {
    img: string;
    description: string;
    description1: string;
  };
}

interface CardDescriptionProps {
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const cardDescriptionContent: CardDescriptionContent = {
    heading: {
      title: "Lemurian Agency, c'est moi !",
      subTitle: "À propos de moi",
    },
    content: {
      img: "/images/andy.png",
      description:
        "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
      description1:
        "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    },
  };

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-15 mt-10 md:mt-0 lg:mb-12 relative z-[5]">
          {/* cardDescription - center - Subtitle */}
          {cardDescriptionContent.heading.subTitle && (
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
              className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-gray-500"
            >
              {cardDescriptionContent.heading.subTitle}
            </motion.span>
          )}

          {/* cardDescription - center - Title */}
          {cardDescriptionContent.heading.title && (
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
              className="text-2xl lg:text-4xl"
            >
              {cardDescriptionContent.heading.title}
            </motion.h2>
          )}
        </div>

        {/* cardDescription - Left - Card Image */}
        <div className="lg: flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delai: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll1 }}
                className="z-[2] relative bg-cover bg-center"
              >
                <Image
                  src={cardDescriptionContent.content.img}
                  className="object-cover !w-full !h-[400] lg:max-w-2xl object-center"
                  alt="Andy profile"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>
            <div className="lg:w-6/12">
              {/* cardDescription - Left - bloc text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-xl mb-7 text-gray-500"
              >
                {cardDescriptionContent.content.description}
              </motion.p>

              {/* cardDescription - Left - bloc text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-xl mb-7 text-gray-500"
              >
                {cardDescriptionContent.content.description1}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDescription;
