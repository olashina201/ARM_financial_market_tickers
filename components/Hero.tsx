import { Filter } from "./Filter";

export const Hero = () => {
  return (
    <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
      <div className="box-border max-w-sm px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 md:max-w-7xl">
        <div className="flex flex-col items-center space-y-5 leading-7 text-center text-gray-900 border-0 border-gray-200 xl:space-y-4">
          <p className="box-border m-0 text-lg font-semibold leading-normal text-gray-900 border-solid md:text-2xl">
            Finance. Market. Performance
          </p>
          <h1 className="box-border m-0 text-4xl font-extrabold leading-tight tracking-tight text-black border-solid md:text-5xl lg:text-6xl">
            Powerful{" "}
            <span className="block mt-1 xl:inline xl:mt-0">
              and Easy to use
            </span>
          </h1>
          <p className="box-border pb-8 text-sm text-gray-900 border-solid md:text-2xl">
            Get the latest financial and stock market news from top news
            sources. Use our API to access clean and relevant financial news and
            analysis.
          </p>
          <Filter />
        </div>
      </div>
    </section>
  );
};
