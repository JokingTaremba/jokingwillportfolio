import { CirclePlus, CircleUser, Folder, Home, Mail, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="m-4">
      <div className="bg-white rounded-lg max-w-3xl mx-auto flex items-center justify-between p-4 ">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#home">
              <Home size={24} />
            </a>
          </li>
          <li>
            <a href="#about">
              <CircleUser size={24} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <Folder size={24} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <Mail size={24} />
            </a>
          </li>
        </ul>
        <a
          className="flex items-center gap-2 bg-[#1e293b] p-2 rounded-lg"
          href="#hireme"
        >
          <CirclePlus size={15} color="white" />
          <h1 className="text-white">Hire Me</h1>
        </a>
      </div>
    </header>
  );
}
