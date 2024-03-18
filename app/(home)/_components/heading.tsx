"use client";

import { cn } from "@/lib/utils";
import { Krona_One } from "next/font/google";
import Image from "next/image";

const kronaOne = Krona_One({
	subsets: ["latin"],
	weight: ["400"],
});

const Heading = () => {
	return (
		<div className="mt-12 h-full w-full flex flex-col items-center justify-between">
			<div className="text-center">
				<p
					className={cn(
						"px-4 text-2xl sm:text-4xl md:text-5xl",
						kronaOne.className
					)}
				>
					Designer, Full-stack Developer from Moscow
				</p>
				<p className="text-2xl font-bold mt-4">
					I create and program aesthetically pleasing and uncomplicated items,
					and I truly enjoy what I do.
				</p>
			</div>
			<Image src="/avatar.png" width={200} height={200} alt="avatar" />
			<Image src="/devices.png" width={620} height={100} alt="devices" />
		</div>
	);
};

export default Heading;
