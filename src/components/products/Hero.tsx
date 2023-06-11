"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";

const Hero: React.FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("products");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row items-center h-screen md:h-auto md:flex-col px-40 lg:px-5 md:px-5 md:mt-20">
      <div className="mb-48 w-full px-5 md:px-10 md:mb-10">
        <h1 className="text-[45px] font-extrabold">Unlock the World of Beer</h1>

        <p className="text-[27px] text-black-100 font-light mt-5 sm:w-full">
        Unleash Your Beerventure: Embark on a Flavorful Expedition!
        </p>

        <Button onClick={handleScroll} className="mt-8 bg-primary w-[200px] sm:w-full">See more</Button>
      </div>
      <div className="mb-48 md:!mb-20">
        <Image
          src="/beer.png"
          alt="hero"
          width={900}
          height={939}
          className="object-contain md:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
