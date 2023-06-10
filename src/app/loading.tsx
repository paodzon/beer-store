import Hero from "@/components/products/Hero";
import LoadingCard from "@/components/products/LoadingCard";
import Search from "@/components/products/Search";
import SelectYear from "@/components/products/SelectYear";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <div
        id="products"
        className="flex flex-col justify-center min-h-screen w-full md:mt-72 px-32"
      >
        <div className="flex items-start w-full flex-col gap-2">
          <h1 className="text-2xl font-bold">Beer Products</h1>
          <p className="text-base">Explore out beers you might like</p>
          <div className="flex flex-row md:flex-col gap-8 items-center justify-between content-center mt-6 w-full">
            <Search />
            <SelectYear />
          </div>
        </div>

        <div className="grid 3xl:grid-cols-4 2xl:!grid-cols-3 lg:flex lg:flex-row lg: flex-wrap md:flex md:flex-col justify-center gap-10 pt-14 ">
          {Array.from({ length: 10 }, (_, idx) => {
            return <LoadingCard key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Loading;
