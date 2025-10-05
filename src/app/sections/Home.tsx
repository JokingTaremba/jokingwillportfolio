import { CirclePlus, Copy, Dot } from "lucide-react";
import Image from "next/image";
import Button from "@/components/button";

export default function Home() {
  return (
    <section id="home" className="pt-6 px-4">
      <div className="text-white flex justify-between items-center mb-10">
        <span className="flex items-center justify-center text-xl font-semibold">
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
            <Button
              text="Hire Me"
              Icon={CirclePlus}
              iconSize={20}
              iconColor="white"
              className="bg-[#334155] p-2 px-3 rounded-lg"
              href="#hireme"
            />
            <Button
              text="Copy Email"
              Icon={Copy}
              iconSize={20}
              iconColor="white"
              className="bg-[#334155] p-2 px-3 rounded-lg"
              href="#copyemail"
            />
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
    </section>
  );
}
