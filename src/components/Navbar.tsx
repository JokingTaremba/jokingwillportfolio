import { CirclePlus, CircleUser, Folder, Home, Mail } from "lucide-react";
import HireMe from "./hireMe";

export default function Navbar() {
  return (
    <header className="m-4">
      <div className="bg-white rounded-lg max-w-2xl mx-auto flex items-center justify-between p-2 ">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#home">
              <Home size={29} />
            </a>
          </li>
          <li>
            <a href="#about">
              <CircleUser size={29} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <Folder size={29} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <Mail size={29} />
            </a>
          </li>
        </ul>
        <HireMe />
      </div>
    </header>
  );
}
