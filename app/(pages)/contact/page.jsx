import BookPromoSection from "@/app/components/contact-components/book-promo";
import ContactForm from "@/app/components/contact-components/contact-form";
import PartnerLogosSection from "@/app/components/partners";
import Subscribe from "@/app/components/subscribe";

const partners = [
    { src: '/partners/bgu.png', link: '#' },
    { src: '/partners/cru.png', link: '#' },
    { src: '/partners/fwe.png', link: '#' },
    { src: '/partners/imb.png', link: '#' },
    { src: '/partners/integrous.png', link: '#' },
    { src: '/partners/leadership.png', link: '#' },
    { src: '/partners/ywamkona.png', link: '#' },
    { src: '/partners/uofn.png', link: '#' },
  ];

export default function Contact() {
  return (
    <>
       <ContactForm />
       <BookPromoSection />
       <PartnerLogosSection 
        logos={partners}
        title="Our Partners"
        boxLink={true}
        ctaText="Become a Partner"
        ctaSubText="Join Now!"
        subtitle="Be the first to know about Cities Project Global news, programs, and impact"
       />
       <Subscribe />
    </>
    
  );
}
