"use client";
import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "./../../public/images/logo4.jpg";

interface FooterLink {
  href: string;
  label: string;
  badge?: string;
}

interface FooterSection {
  heading: string;
  links: FooterLink[];
}

interface FooterContent {
  footerLinks: FooterSection[];
}

const footerContent: FooterContent = {
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          href: "#",
          label: "Home",
        },
        {
          href: "/project",
          label: "Projects",
        },
        {
          href: "/blog",
          label: "Blog",
        },
        {
          href: "/about",
          label: "About",
        },
        {
          href: "/contact",
          label: "Contact",
        },
        {
          href: "/princing",
          label: "Princing",
        },
      ],
    },
    {
      heading: "Ressources",
      links: [
        {
          href: "#",
          label: "Malt",
          badge: "New",
        },
        {
          href: "#",
          label: "Linkedin",
        },
        {
          href: "#",
          label: "Portfolio",
          // badge: "Archive",
        },
      ],
    },
    {
      heading: "Product",
      links: [
        {
          href: "#",
          label: "I.A",
          badge: "New",
        },
        {
          href: "#",
          label: "Création",
        },
        {
          href: "/princing",
          label: "Réferencement",
        },
        {
          href: "#",
          label: "Herbergement",
        },
      ],
    },
  ],
};
const Copyright = () => (
  <div className="pt-7 mt-7 md:mt-14 md:pt-14 border-t border-t-gray-100 text-center text-gray-500">
    <div className="text-center items-center mx-auto text-sm">
      &copy; 2024{" "}
      <Link
        href="/"
        suppressHydrationWarning={true}
        className="text-orange-600"
      >
        Lemurian Agency.
      </Link>{" "}
      All rights reserved. Created with{" "}
      <BiSolidHeart className="text-red-500 mx-1 inline-block" />
      by{" "}
      <Link
        href="/"
        suppressHydrationWarning={true}
        className="text-orange-600"
      >
        Andy Ramaroson
      </Link>
    </div>
  </div>
);

const Footer: React.FC<{ className: string }> = ({ className }) => (
  <footer className={`${className} overflow-hidden w-full h-full relative`}>
    <div className="container mx-auto px-4 z-20 relative">
      <div className="md:flex">
        <div className="md:w-4/12 mb-10 md:mb-0 flex flex-row">
          <div className="items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.2,
                },
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.01 } }}
              className="z-[2] relative bg-cover bg-center"
            >
              <img
                src="/images/logo4.jpg"
                className="rounded-full"
                width={50}
                height={50}
                alt={`logo`}
              />
            </motion.div>
          </div>
          <Link href="#" className="text-[22px] text-gray-800 font-bold mt-3">
            Lemurian Agency
            <span className="text-orange-400">.</span>
          </Link>
        </div>

        <div className="md:w-8/12">
          <div className="grid grid-cols-3 md:grid-cols-3">
            {footerContent.footerLinks.map((section, sectionIndex) => (
              <div className="mb-10 md:mb-0" key={section.heading}>
                <h3 className="mb-3 mt-6 md:mb-3 text-orange-400 text-bold-500">
                  {section.heading}
                </h3>
                <ul className="list-none">
                  {section.links.map((link, linkIndex) => (
                    <li className="mb-2" key={link.label}>
                      <Link
                        suppressHydrationWarning={true}
                        href={link.href}
                        className={`${
                          link.badge ? "flex gap-3 items-center" : ""
                        }
                          text-gray-500 duration-300 transition-all ease-in-out hover:text-orange-400`}
                      >
                        {link.badge ? (
                          <>
                            <span>{link.label}</span>
                            <span
                              className="py-0.5 px-2 rounded-full bg-orange-100
                                border border-orange-400 text-[10px] text-orange-400
                                font-semibold"
                            >
                              {link.badge}
                            </span>
                          </>
                        ) : (
                          link.label
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  </footer>
);

export default Footer;
