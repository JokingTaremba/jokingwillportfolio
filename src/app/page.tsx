import Home from "./sections/Home";
import Projects from "./sections/project";

export default function HomePage() {
  return (
    <div className="bg-[#1e293b] max-w-2xl rounded-lg mx-auto px-4">
      <Home />
      <Projects />
    </div>
  );
}
