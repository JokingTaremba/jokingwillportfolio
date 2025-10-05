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
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: <Twitter size={19} color="white" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: <Instagram size={19} color="white" />,
  },
];

export default function SocialMidia() {
  return (
    <section id="projects" className="bg-[#334155] mt-10 rounded-lg p-4">
      <div className="text-white flex justify-between items-center">
        <span className="flex items-center justify-center text-xl font-semibold">
          <Dot size={30} />
          Follow Me
        </span>

        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] p-3 rounded-full transition flex items-center justify-center"
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
