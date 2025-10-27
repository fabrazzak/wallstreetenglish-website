import Image from "next/image";

export default function VisitSchools() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-[120px]">
        {/* Content */}
        <div className="md:w-1/2 w-full order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-[56px] font-bold mb-4 text-[#003359] text-center md:text-left">
            Visit our English schools
          </h2>
          <div className="text-[#000000a6] text-[14px] md:text-[16px] space-y-3 md:space-y-4 mb-6 text-center md:text-left">
            <p>
              Come and visit us in one of our English schools to talk to our team about how we can help you achieve your goals with English. Get a free comprehensive English placement test to find out your level and then we'll develop a personalized learning plan for you based on your agreed learning goals.
            </p>
          </div>
          <div className="text-center md:text-left">
            <a
              href="/speak-plus-english-speaking-practice/"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border border-gray-300 rounded-lg font-bold bg-[#de1135] hover:bg-[#b30d29] text-white transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
            >
              Visit a school
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full order-1 md:order-2">
          <Image
            src="/visit-school.webp"
            alt="Visit our English schools"
            width={1000}
            height={667}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}