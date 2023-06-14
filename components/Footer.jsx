import Image from "next/image";
import Link from "next/link";
import Logo from "public/favicon.png";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-background-white dark:bg-background-black">
      <div className="mx-auto w-full container p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                El-Sayed Chelsea
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 font-semibold text-main uppercase">
                Portfolio
              </h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="/#skills">Skills</Link>
                </li>
                <li className="mb-4">
                  <Link href="/#work">Works</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 font-semibold text-main uppercase">Blog</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li>
                  <Link href="/blog/category">Category</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-main uppercase">Tools</h2>
              <ul className="font-medium">
                <li>
                  <Link href="/tools">All Tools</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {date.getFullYear()} <a href="/">El-Sayed Chelsea™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              target="_blank"
              href="https://www.facebook.com/sayed.chelsea.7"
              className="hover:text-main transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              target="_blank"
              href="https://wa.me/+201507807970"
              className="hover:text-main transition-all duration-300"
            >
              <IoLogoWhatsapp className="w-5 h-5 text-xl" />
              <span className="sr-only">Whatsapp page</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/El-SayedChelsea7"
              className="hover:text-main transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
