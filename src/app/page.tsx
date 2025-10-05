import Footer from "./sections/footer";
import HireMe from "./sections/hireme";
import Home from "./sections/Home";
import Projects from "./sections/project";
import SocialMedia from "./sections/socialmedia";

export default function HomePage() {
  return (
    <div className="bg-[#1e293b] max-w-2xl rounded-lg mx-auto px-4 mb-8">
      <Home />
      <Projects />
      <HireMe />
      <SocialMedia />
      <Footer />
    </div>
  );
}
