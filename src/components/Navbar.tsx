import { CirclePlus, CircleUser, Folder, Home, Mail } from "lucide-react";
import Button from "./button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-2xl mx-auto flex items-center justify-between p-2 m-4 rounded-lg bg-white shadow-lg">
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
        <Button
          text="Hire Me"
          Icon={CirclePlus}
          iconSize={20}
          iconColor="white"
          className="bg-[#1e293b] p-2 rounded-lg"
          href="#hireme"
        />
      </div>
    </header>
  );
}
