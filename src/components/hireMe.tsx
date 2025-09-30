import { CirclePlus } from "lucide-react";

export default function HireMe() {
  return (
    <a
      className="flex items-center gap-2 bg-[#1e293b] p-2 rounded-lg"
      href="#hireme"
    >
      <CirclePlus size={15} color="white" />
      <h1 className="text-white">Hire Me</h1>
    </a>
  );
}
