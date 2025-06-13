import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Button({ text, url = "#", type = "url", altIcon = false, variant = 'filled', classes }) {
  const baseClass =
    "font-sans font-bold text-sm px-6 py-3 rounded-md inline-flex items-center gap-1 transition";

  const variantClass =
    variant === "outline"
      ? "border border-black text-black hover:bg-black hover:text-white"
      : "bg-[#A1CF5F] text-black hover:bg-[#b3e77d]";

  const buttonClass = `${baseClass} ${variantClass} ${classes}`;

  const icon = altIcon ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />;

  if (type === "url") {
    return (
      <Link href={url} className={buttonClass}>
        {text}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClass}>
      {text}
      {icon}
    </button>
  );
}
