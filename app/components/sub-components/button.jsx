import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Button({ text, url = "#", type = "url", altIcon = false }) {
  const buttonClass =
    "bg-[#A1CF5F] font-sans text-black font-bold text-sm px-6 py-3 rounded-md inline-flex items-center gap-1 transition hover:bg-[#b3e77d]";

  const icon = altIcon ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />;

  // Render a Link with <a> inside for 'url' type
  if (type === "url") {
    return (
      <Link href={url} className={buttonClass}>
          {text}
          {icon}
      </Link>
    );
  }

  // Render a standard <button> with appropriate type
  return (
    <button type={type} className={buttonClass}>
      {text}
      {icon}
    </button>
  );
}
