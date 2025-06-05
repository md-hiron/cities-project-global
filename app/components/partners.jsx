import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { src: '/partners/bgu.png', link: '#' },
  { src: '/partners/cru.png', link: '#' },
  { src: '/partners/fwe.png', link: '#' },
  { src: '/partners/imb.png', link: '#' },
  { src: '/partners/integrous.png', link: '#' },
  { src: '/partners/leadership.png', link: '#' },
  { src: '/partners/ywamkona.png', link: '#' },
  { src: '/partners/uofn.png', link: '#' },
  { src: '/partners/ncf.png', link: '#' },
  { src: '/partners/seed.png', link: '#' },
  { src: '/partners/wea.png', link: '#' },
  { src: '/partners/cea.png', link: '#' },
  { src: '/partners/gcu.png', link: '#' },
];

export default function PartnerLogosSection() {
  return (
    <section className="lg:py-28 py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-sans font-bold mb-12">
          Partnering to Expand Our Mission
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.link}
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
        </div>

        <div>
          <p className="font-bold font-sans text-xl mb-4">Join us through partnering</p>
          <Link
            href="mailto:info@example.com"
            className="inline-block px-8 py-2 bg-[#A1CF5F] text-black font-sans font-bold text-xl rounded-md hover:bg-[#92bc52] transition"
          >
            Email Us ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
