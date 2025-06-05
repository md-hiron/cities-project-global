import Image from 'next/image';
import Link from 'next/link';

const brandLogos = [
  {
    name: 'Amazon',
    src: '/brand.png',
    link: 'https://www.amazon.com/',
  },
  {
    name: 'Archway Publishing',
    src: '/brand2.png',
    link: 'https://www.archwaypublishing.com/',
  },
  {
    name: 'Barnes & Noble',
    src: '/brand3.png',
    link: 'https://www.barnesandnoble.com/',
  },
  {
    name: 'Porchlight',
    src: '/brand4.png',
    link: 'https://www.porchlightbooks.com/',
  },
];

export default function Branding() {
  return (
    <section className="branding pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-20">
          {brandLogos.map((brand, index) => (
            <div key={index} className="w-auto max-w-[160px] mb-4">
              <Link href={brand.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={brand.src}
                  width={200}
                  height={77}
                  className="mx-auto"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
