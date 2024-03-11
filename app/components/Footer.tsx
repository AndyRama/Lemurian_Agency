"use client";
import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import Link from "next/link";

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
      heading: "Product",
      links: [
        {
          href: "/pricing",
          label: "Pack Trainnig Atheler",
          badge: "New",
        },
        {
          href: "/pricing",
          label: "Pack Starter",
          badge: "Promo",
        },
        {
          href: "/pricing",
          label: "Pack Elite Premium",
        },
        {
          href: "/princing",
          label: "Pack Nutrition",
        },
      ],
    },
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
          href: "/pricing",
          label: "Princing",
        },
        {
          href: "/about",
          label: "About",
        },
        {
          href: "/contact",
          label: "Contact",
        },
      ],
    },
    {
      heading: "Ressources",
      links: [
        {
          href: "/blog",
          label: "Blog",
        },
        {
          href: "#",
          label: "Unlcoaching.app",
          badge: "PlayStore",
        },
        {
          href: "#",
          label: "Support",
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
        <div className="md:w-4/12 mb-10 md:mb-0">
          <Link href="#" className="text-[22px] text-gray-800 font-bold">
            Lemurian
            <span className="text-orange-400">.</span>
          </Link>
        </div>

        <div className="md:w-8/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {footerContent.footerLinks.map((section, sectionIndex) => (
              <div className="mb-10 md:mb-0" key={section.heading}>
                <h3 className="text-gray-800 mb-3 md:mb-3">
                  {section.heading}
                </h3>
                <ul className="list-none">
                  {section.links.map((link, linkIndex) => (
                    <li className="mb-2" key={link.label}>
                      <Link
                        suppressHydrationWarning={true}
                        href={link.href}
                        className={`${
                          link.badge ? "flex gap-2 items-center" : ""
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
