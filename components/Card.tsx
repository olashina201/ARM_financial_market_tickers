import React from "react";
import { IResponseData } from "../interface";

type Props = {
  news: IResponseData;
};

export const Card: React.FC<Props> = ({ news }) => {
  const { uuid, image_url, source, title, description, published_at, url } =
    news;
  return (
    <div
      className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
      key={uuid}
    >
      <a href="#_" className="block">
        <img
          className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
          src={image_url}
        />
      </a>
      <div className="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
        <span>{source}</span>
      </div>
      <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
        <a href="#_">{title}</a>
      </h2>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="pt-2 text-xs font-medium">
        <a href="#_" className="mr-1 underline">
          Mary Jane
        </a>{" "}
        · <span className="mx-1">{published_at.slice(0, 10)}</span> ·{" "}
        <a href={url} target="_blank" className="mx-1 text-gray-600">
          Read Now
        </a>
      </p>
    </div>
  );
};
