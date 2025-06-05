import Image from 'next/image';

export default function Member({title, members, padding = 'lg:py-28 py-16'}) {
  return (
    <section className={padding}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-sans font-bold text-center mb-14">{title}</h2>

        <div className="flex flex-wrap lg:-mx-4">
          {members.map((member, idx) => (
            <div key={idx} className="lg:w-1/4 w-full lg:px-4 mb-10">
              <div className="border border-[#EAECF0] rounded-lg overflow-hidden bg-white h-full flex flex-col">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col grow">
                  <h3 className="text-lg font-sans font-semibold text-[#282828] mb-1">{member.name}</h3>
                  <p className="text-sm font-sans text-[#5F6980] mb-2">{member.role}</p>
                  <p className="text-sm font-sans text-[#5F6980]">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
