"use client";

import Image from "next/image";

const Skills = () => {
	return (
		<div className="h-auto gap-y-10 p-8 sm:h-[450px] flex flex-wrap items-center justify-evenly">
			<div className="w-full h-auto py-8 sm:w-1/3 md:h-full border-2 rounded-xl flex flex-col items-center justify-around px-6 sm:h-[350px] hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 cursor-default">
				<Image src="/design.png" width={115} height={97} alt="design" />
				<div>
					<p className="text-2xl font-bold">Designer</p>
					<p>
						I appreciate the simplicity of content structure, adhere to clean
						design patterns, and focus on thoughtful interactions.
					</p>
					<p className="text-[#6E07F3] mt-4 text-lg">
						Things I enjoy designing:
					</p>
					<p className="text-sm">UX, UI, Web, Apps, Logos.</p>
				</div>
			</div>

			<div className="w-full h-auto py-8 sm:w-1/3 border-2 rounded-xl flex flex-col items-center justify-around px-6 md:h-full sm:h-[350px] hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 cursor-default">
				<Image src="/programming.png" width={64} height={64} alt="design" />
				<div>
					<p className="text-2xl font-bold mt-4">Full-stack developer</p>
					<p>
						I am experienced in working on both the front-end and back-end of
						web development projects. I am proficient in coding both the user
						interface and the server-side logic required to build complete web
						applications.
					</p>
					<p className="text-[#6E07F3] mt-4 text-lg">Languages I speak:</p>
					<p className="text-sm">
						Python, JavaScript, HTML, CSS, SCSS, React.JS, Next.JS, Nest.JS, C#.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
