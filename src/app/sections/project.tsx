"use client";
import Button from "@/components/button";
import { ArrowRight, Dot, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Solvicity",
      description:
        "Aplicação móvel que permite aos cidadãos da Beira reportar problemas em infraestruturas urbanas com fotos, descrição e localização em mapa interativo.",
      image: "/images/profile.jpeg",
      stack: [
        "Spring boot",
        "Jetpack Compose",
        "Retrofit",
        "Docker",
        "Postegres",
        "Git(Hub)",
      ],
      link: "#",
    },
    {
      id: 2,
      title: "2iBi-mobile-developer-chalenge",
      description:
        "Mobile application that allows you to view detailed property information from different countries in a user-friendly way.",
      image: "/images/profile.jpeg",
      stack: [
        "Spring boot",
        "Jetpack Compose",
        "Retrofit",
        "Docker",
        "Postegres",
        "Git(Hub)",
      ],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-[#334155] mt-10 rounded-lg p-4">
      <div className="text-white flex justify-between items-center mb-10">
        <span className="flex items-center justify-center text-xl font-semibold">
          <Dot size={30} />
          Projects
        </span>
        <Button
          Icon={ArrowRight}
          text="View All"
          iconSize={20}
          iconPosition="right"
          iconColor="white"
          className="bg-[#334155] p-1 px-2 rounded-lg border border-solid"
          href="#hireme"
        />
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-[#1e293b] p-4 rounded-xl hover:shadow-lg transition"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Image
                src="/images/profile.jpeg"
                alt="Minha foto"
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />

              <div className="flex flex-col justify-between text-white">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  <a
                    href={project.link}
                    className=" inline-flex items-center justify-center bg-[#334155] px-3 rounded-3xl hover:bg-green-500/30 transition"
                  >
                    <Github size={14} color="white" className="mr-1" />
                    Visit
                  </a>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 ">
                  {project.stack?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#334155] text-gray-200 px-3 py-1 rounded-full text-xs border border-gray-600 transition uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
