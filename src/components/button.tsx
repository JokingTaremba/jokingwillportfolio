import { LucideIcon } from "lucide-react";

interface ButtonWithIconProps {
  text: string;
  href?: string;
  Icon: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  className?: string;
}

export default function Button({
  text,
  href = "#",
  Icon,
  iconSize = 15,
  iconColor = "white",
  className = "bg-[#334155] p-2 rounded-lg",
}: ButtonWithIconProps) {
  return (
    <a href={href} className={`flex items-center gap-2 ${className}`}>
      <Icon size={iconSize} color={iconColor} />
      <span className="text-white">{text}</span>
    </a>
  );
}
