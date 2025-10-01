"use client";
import Button from "@/components/button";
import { ArrowRight, Dot, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Solvicity",
      description:
        "Aplicação móvel que permite aos cidadãos da Beira reportar problemas em infraestruturas urbanas com fotos, descrição e localização em mapa interativo.",
      image: "/images/project1-mobile.png",
      link: "#",
    },
    // {
    //   id: 2,
    //   title: "2iBi-mobile-developer-chalenge",
    //   description:
    //     "Mobile application that allows you to view detailed property information from different countries in a user-friendly way.",
    //   image: "/images/project2-mobile.png",
    //   link: "#",
    // },
  ];

  return (
    <section id="projects" className="bg-[#334155] mt-10 rounded-lg p-4">
      <div className="text-white flex justify-between items-center mb-10">
        <span className="flex items-center justify-center text-lg font-semibold">
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

      <div className="bg-[#1e293b] p-4 rounded-lg">
        {projects.map((project, index) => (
          <div>
            <div className="text-white flex items-center gap-6">
              <h3 className="font-semibold">{project.title}</h3>
              <a
                className="flex items-center justify-center bg-[#334155] px-2 gap-1 rounded-3xl hover:bg-green-500/28 transition"
                href="#avalibleforwork"
              >
                <Github size={15} color="white" />
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
