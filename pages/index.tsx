import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Cards } from "../components/Cards";
import { marketaux } from "../config/marketaux";
import HeroSection from "../components/HeroSection";
import Title from "../components/Title";
import { IResponseData } from "../interface";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [news, setNews] = React.useState([]);

  const getNews = async () => {
    try {
      const response = await marketaux.get("/news/all");
      setNews(response.data.data);
    } catch (error: any) {
      throw new Error("Something when wrong, please try again later", {
        cause: error,
      });
    }
  };

  const handleSearchSubmit = async (filter: string) => {
    try {
      const response = news.filter((data: IResponseData) =>
        data.keywords.includes(filter)
      );
      setNews(response);
    } catch (error: any) {
      throw new Error("Something when wrong, please try again later", {
        cause: error,
      });
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection handleSearchSubmit={handleSearchSubmit} />
      <Title />
      <Cards news={news} />
      <Footer />
    </div>
  );
};

export default Home;
