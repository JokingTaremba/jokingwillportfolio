import { Dot, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/",
    icon: <Linkedin size={19} color="white" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: <Github size={19} color="white" />,
  },
];

export default function SocialMedia() {
  return (
    <section id="socialmedia" className="bg-[#334155] mt-10 rounded-lg p-2">
      <div className="text-white flex justify-between items-center">
        <span className="flex items-center justify-center text-md font-semibold">
          <Dot size={30} />
          Follow Me
        </span>

        <div className="flex gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] p-2 rounded-full transition flex items-center justify-center"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
