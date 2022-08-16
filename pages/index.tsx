import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Cards } from "../components/Cards";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { marketaux } from "../config/marketaux";

const Home: NextPage = () => {
  const [news, setNews] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const getNews = async () => {
    const response = await marketaux.get("/news/all");
    setNews(response.data.data);
    console.log(news);
  };

  const filterNews = async (filter: string) => {
    const response = await marketaux.get(`/news/all?${filter}=${search}`);
    setNews(response.data.data);
  };
  React.useEffect(() => {
    getNews();
    // filterNews('exchanges')
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Cards news={news} />
    </div>
  );
};

export default Home;
