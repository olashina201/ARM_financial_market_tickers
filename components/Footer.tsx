import React from "react";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <a href="#_" className="flex items-center text-lg font-bold">
            <span className="ml-1">Marketaux.</span>
          </a>
        </div>
        <div className="flex flex-col justify-between mt-5 mb-5 text-center sm:mb-0 sm:mt-12 sm:flex-row">
          <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm font-bold">
            <li>
              {" "}
              <a href="#_" className="px-2 text-gray-500 hover:text-gray-600">
                Contact
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-2 text-gray-500 hover:text-gray-600">
                About US
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-2 text-gray-500 hover:text-gray-600">
                FAQ's
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-2 text-gray-500 hover:text-gray-600">
                Terms
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs leading-tight text-gray-500 sm:mt-0">
            {" "}
            © Copyright 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
