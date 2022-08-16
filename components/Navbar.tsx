import React from "react";

const Navbar = () => {
  return (
    <section className="w-full px-4 text-white bg-blue-700 body-font fixed">
      <div className="container flex flex-col items-center justify-center py-3 mx-auto max-w-7xl md:flex-row">
        <a
          href="#_"
          className="flex items-center font-sans text-3xl font-extrabold text-center text-white no-underline bg-transparent cursor-pointer focus:no-underline"
        >
          <span>Marketaux.</span>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
