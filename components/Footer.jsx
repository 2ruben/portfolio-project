import Link from 'next/link';
import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto flex justify-between justify-center px-4 w-3/5 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h3 className="text-center text-lg mx-auto font-bold mb-4 mr-8 ">Sitemap</h3>
          <ul>
            <li className="text-center mr-8 w-full">
              <Link href="#home">
                <a>Home</a>
              </Link>
            </li>
            <li className="text-center mr-8 w-full">
              <Link href="#skills">
                <a>Skills</a>
              </Link>
            </li>
            <li className="text-center mr-8 w-full">
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-center text-lg font-bold mb-4">Social Media</h3>
          <ul className="flex-col items-center justify-center flex justify-center text-center">
            <li className="flex">
              <a href="#">
                <BsLinkedin size="20px" className="mr-4 mb-5 text-center" />
              </a>
              <span>Rubén Guarín</span>
            </li>
            <li className="flex">
              <a href="#">
                <BsInstagram size="20px" className="mr-4 mb-2 text-center" />
              </a>
              <span>@guarin_robles</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} RDGR
      </p>
    </footer>
  );
};
