import { CirclePlus, Copy } from "lucide-react";

export default function CopyEmail() {
  return (
    <a
      className="flex items-center gap-2 bg-[#1e293b] p-2 rounded-lg"
      href="#copyemail"
    >
      <Copy size={15} color="white" />
      <h1 className="text-white">Copy Email</h1>
    </a>
  );
}
