import About from "./_components/about";
import Heading from "./_components/heading";
import RecentWork from "./_components/recent-work";
import Skills from "./_components/skills";

export default function Home() {
	// TODO: add another pages
	return (
		<div className="h-screen w-full">
			<Heading />
			<About />
			<Skills />
			<RecentWork />
		</div>
	);
}
