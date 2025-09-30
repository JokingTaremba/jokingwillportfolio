import CopyEmail from "@/components/copyEmail";
import HireMe from "@/components/hireMe";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-white flex justify-between items-center mb-10">
          <span className="flex items-center justify-center text-lg font-semibold">
            <Dot size={30} />
            Software Developer
          </span>
          <a
            className="text-green-300 flex items-center justify-center bg-green-500/20 pr-4 rounded-3xl hover:bg-green-500/28 transition"
            href="#avalibleforwork"
          >
            <Dot size={30} color="green" />
            AVAILABLE FOR WORK
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="text-white md:w-2/3 text-center md:text-left">
            <h1 className="font-bold text-4xl mb-4">I'm Joking Taremba</h1>
            <p className="text-lg mb-6">
              Software developer dedicated to creating solutions that transform
              concepts into real and relevant applications.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <HireMe />
              <CopyEmail />
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <Image
              className="rounded-full shadow-lg"
              src="/images/profile.jpeg"
              alt="Minha foto"
              width={200}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
