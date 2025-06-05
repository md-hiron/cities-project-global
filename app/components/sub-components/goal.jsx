export default function Goal({ highlight = '', text = '', subtitle = '' }) {
  return (
    <div className="lg:flex">
        <h2 className="font-sans font-bold text-4xl text-[#A1CF5F] mr-1 min-w-[270px] max-lg:mb-5">{highlight}</h2>
        <div className="">
            <p className="font-sans font-bold text-3xl">{text}</p>
            {subtitle && (
                <h3 className="font-sans font-bold text-[#A1CF5F] text-3xl mt-4">{subtitle}</h3>
            )}
        </div>
        
    </div>
  );
}
