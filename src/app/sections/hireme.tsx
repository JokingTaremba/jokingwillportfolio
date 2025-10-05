import Button from "@/components/button";
import { CirclePlus, Copy } from "lucide-react";

export default function HireMe() {
  return (
    <section id="hireme" className="mt-10 p-4">
      <div className="text-white flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Let’s work together.</h1>
        <p className="text-gray-300 text-lg">
          Creating user experience and visual appealing design
        </p>
        <div className="flex justify-center mt-4 md:justify-start gap-4">
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
    </section>
  );
}
