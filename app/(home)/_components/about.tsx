"use client";

import { cn } from "@/lib/utils";
import { Krona_One } from "next/font/google";

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <div className="bg-[#6E07F3] h-auto p-8 sm:h-auto md:h-[438px] flex flex-col items-center justify-center text-white">
      <p className={cn("text-xl sm:text-3xl md:text-4xl", kronaOne.className)}>
        Hi, i&apos;m Dilmurod.
      </p>
      <p className="w-full sm:w-2/3 mt-4 text-lg sm:text-xl md:text-2xl font-medium">
        For the past year, I have been pursuing my career as a freelance
        designer, completing remote work for agencies, offering consultations to
        startups, and partnering with skilled individuals to develop digital
        products for various industries. I am self-assured, yet modest,
        naturally inquisitive, and constantly striving to enhance my abilities.
      </p>
    </div>
  );
};

export default About;
