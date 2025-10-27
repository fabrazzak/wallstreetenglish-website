// components/CourseBuiltAroundYou.js
import Image from "next/image";

export default function CourseBuiltAroundYou() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[120px]">
          {/* Image - moved to top on mobile */}
          <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-lg order-1 md:order-1">
            <Image
              src="/course-img.webp"
              alt="A Wall Street English Student Learning Online"
              width={1128}
              height={1128}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 w-full order-2 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-[56px] font-bold mb-4 md:mb-6 text-[#003359] text-center md:text-left">
              A course built around you
            </h2>
            <div className="text-gray-700 space-y-3 md:space-y-4 mb-6 text-[16px] md:text-[18px] text-center md:text-left">
              <p>
                Designed to fit your schedule, level and ambitions, our course
                lets you study English on your own terms. Learn in our digital
                classroom, in-person at a school or choose both for total
                flexibility with our Full Access offer. Get the same certified
                teachers, the same proven method and the same immersive
                experience. Get guaranteed results.
              </p>
              <p>
                Busy schedule? No problem - we're here to support you. Our
                personal coaches are here to help.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
              <a
                href="https://www.wallstreetenglish.com/learn-english-online/"
                className="inline-flex items-center gap-2 text-[#de1135] font-semibold hover:text-gray-700 text-[16px] md:text-[18px] justify-center md:justify-start"
              >
                <span>Online</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a
                href="https://www.wallstreetenglish.com/full-access-english-schools/"
                className="inline-flex items-center gap-2 text-[#de1135] font-semibold hover:text-gray-700 text-[16px] md:text-[18px] justify-center md:justify-start"
              >
                <span>Full access</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a
                href="https://www.wallstreetenglish.com/private-english-course/"
                className="inline-flex items-center gap-2 text-[#de1135] font-semibold hover:text-gray-700 text-[16px] md:text-[18px] justify-center md:justify-start"
              >
                <span>Private (1-1)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}