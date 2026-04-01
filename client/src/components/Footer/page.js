import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-occean text-white pt-16 pb-4 font-mona">
      <div className="container mx-auto px-4">
        <div className="flex justify-around">
          {/* Logo and Description */}
          <div className="space-y-4 w-1/5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Group.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-white mt-4 text-xs ">
              Do you have any questions about Us? See the list for our most
              frequently asked questions. If your questions is not listed here,
              then please contact us.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="#"
                className="bg-[#7657ff]/10 p-2 rounded-full hover:bg-[#ffffff]/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-[#7657ff]/10 p-2 rounded-full hover:bg-[#ffffff]/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-[#7657ff]/10 p-2 rounded-full hover:bg-[#ffffff]/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-[#7657ff]/10 p-2 rounded-full hover:bg-[#ffffff]/20 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
                <span className="sr-only">Github</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="mt-8 md:mt-0 w-1/5">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-white-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-white-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="flex items-center text-white-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Our Team Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-white-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="flex items-center text-white-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Work Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          {/* <div className="mt-8 md:mt-0 w-1/5">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Our Team Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Work Gallery
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Quick Links Column 3 */}
          {/* <div className="mt-8 md:mt-0 w-1/5">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Our Team Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="flex items-center text-gray-600 hover:text-[#7657ff] transition-colors"
                >
                  <span className="mr-2">►</span> Work Gallery
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center font-semibold text-xs text-white">
          <p>All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
}
