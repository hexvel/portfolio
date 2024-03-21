"use client";
import { cn } from "@/lib/utils";
import { Krona_One } from "next/font/google";
import Link from "next/link";

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
});

const RecentWork = () => {
  return (
    <div className="h-auto p-8 sm:h-auto md:h-[438px] flex flex-col items-center justify-center">
      <p className={cn("text-xl sm:text-3xl md:text-4xl", kronaOne.className)}>
        My Recent Work
      </p>
      <p className="w-full sm:w-2/3 mt-4 text-lg sm:text-xl md:text-2xl font-medium">
        I'd like to share a selection of full-stack projects that I've recently
        completed. If you're interested in learning more about my work, please
        feel free to reach out to me{" "}
        <Link
          href="hexvel"
          as="https://t.me/hexvel"
          target="_blank"
          className="text-[#6E07F3]"
        >
          via telegram
        </Link>
        .
      </p>
      <div className="mt-20">
        <p className="text-2xl text-muted-foreground">
          Work&apos;s not found...
        </p>
      </div>
    </div>
  );
};

export default RecentWork;
