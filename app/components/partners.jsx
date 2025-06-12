import Image from 'next/image';
import Link from 'next/link';
import BoxLink from './sub-components/box-link';

export default function PartnerLogosSection({
  title = 'Partnering to Expand Our Mission',
  subtitle = '',
  logos = [],
  ctaText = 'Email Us ↗',
  ctaHref = 'mailto:info@example.com',
  ctaSubText = 'Join us through partnering',
  boxLink = false
}) {
  return (
    <section className="lg:py-28 py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
        )}
        { subtitle && (
          <p>{subtitle}</p>
        ) }

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12">
          {logos.map((partner, index) => (
            <Link
              key={index}
              href={partner.link || '#'}
              className="flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={partner.src}
                alt={`Partner logo ${index + 1}`}
                width={185}
                height={180}
                className="max-w-full"
              />
            </Link>
          ))}
          { boxLink && 
          <BoxLink 
            classes="w-[185px] h-[180px] bg-black text-white text-left"
            title={ctaText}
            text={ctaSubText}
            url={ctaHref}
          /> }
          
        </div>

        {!boxLink && <p className="font-bold text-xl mb-4">{ctaSubText}</p>}

        {!boxLink && (
          <Link
            href={ctaHref}
            className="inline-block px-8 py-2 bg-[#A1CF5F] text-black font-bold text-xl rounded-md hover:bg-[#92bc52] transition"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
