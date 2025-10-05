import HireMe from "./sections/hireme";
import Home from "./sections/Home";
import Projects from "./sections/project";
import SocialMidia from "./sections/socialmidia";

export default function HomePage() {
  return (
    <div className="bg-[#1e293b] max-w-2xl rounded-lg mx-auto px-4">
      <Home />
      <Projects />
      <HireMe />
      <SocialMidia />
    </div>
  );
}
