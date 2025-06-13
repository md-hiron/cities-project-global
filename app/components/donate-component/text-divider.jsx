
const content = {
    text: 'OUR MISSION & VISION',
    repeat: 30, 
  };
  
  export default function TextDivider() {
    return (
      <div className="w-full bg-[#A1CF5F] overflow-hidden whitespace-nowrap py-2">
        <div className="flex animate-scroll-text">
          {Array.from({ length: content.repeat }).map((_, i) => (
            <span
              key={i}
              className="text-[#D3FF93] font-bold text-sm mx-4 shrink-0"
            >
              {content.text}
            </span>
          ))}
        </div>
      </div>
    );
  }
  