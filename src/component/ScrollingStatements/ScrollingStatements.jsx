"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollingStatements() {
  const statements = [
    {
      title:
        "Work with a Personal Coach to build your study plan – and get the results you need.",
      subtitle: "Set your own goals",
    },
    {
      title:
        "Start your course when you want and study anytime, anywhere",
      subtitle: "Complete flexibility and independence",
    },
    {
      title:
        "Online, in-person, or a mix of both – our award-winning platform gives you full flexibility.",
      subtitle: "Learn online and in-person",
    },
    {
      title:
        "Our highly-qualified teachers use the latest tech and our proven method.",
      subtitle: "Enjoy unbeatable teaching quality",
    },
    {
      title:
        "Join a global community of English learners on your journey to success.",
      subtitle: "Join a global learning community",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-12 md:py-16 bg-white">
      <div
        className="max-w-[1180px] mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8"
        ref={containerRef}
      >
        {/* Left Images */}
        <div className="md:w-5/12 flex flex-col items-center md:items-start gap-6 order-2 md:order-1">
          {/* Mobile Images */}
          <div className="md:hidden flex flex-col items-center gap-4 w-full">
            <img
              src="/unique-1.webp"
              alt="Learning English with a mobile or computer"
              width={200}
              height={200}
              className="w-full max-w-[200px]"
            />
            <Image
              src="/unique-2.webp"
              alt="Personal tutor"
              width={300}
              height={400}
              className="w-full max-w-[250px]"
            />
          </div>

          {/* Desktop Images */}
          <div className="hidden md:flex items-center gap-2">
            <div>
              <img
                src="/unique-1.webp"
                alt="Learning English with a mobile or computer"
                width={230}
                height={230}
                className="mb-6"
              />
            </div>
            <div>
              <Image
                src="/unique-2.webp"
                alt="Personal tutor"
                width={270}
                height={600}
              />
              <div className="pt-10 mx-auto flex items-center justify-center content-center">
                <a
                  href="/how-you-learn-english/"
                  className="inline-flex items-center gap-2 px-3 py-3 border-2 border-[#E60028] rounded text-[#E60028] font-semibold hover:bg-gray-100 transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
                >
                  Get your course price
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
          </div>

          {/* Mobile Button */}
          <div className="md:hidden w-full text-center mt-4">
            <a
              href="/how-you-learn-english/"
              className="inline-flex items-center gap-2 px-4 py-3 border-2 border-[#E60028] rounded text-[#E60028] font-semibold hover:bg-gray-100 transition text-[14px] w-full justify-center"
            >
              Get your course price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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

        {/* Right Statements */}
        <div className="md:w-7/12 flex flex-col gap-6 md:gap-8 md:pl-20 md:pt-10 relative order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] xl:text-[56px] font-bold mb-4 md:mb-6 text-[#003359] text-center md:text-left">
            Unique experience. Guaranteed results.
          </h2>

          {statements.map((s, index) => {
            const start = index / statements.length;
            const end = (index + 1) / statements.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.5, 1]
            );
            const y = useTransform(scrollYProgress, [start, end], [50, 0]);

            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <h3 className="text-lg md:text-xl lg:text-[32px] text-[#003359] font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-[#003359] text-[14px] md:text-[16px]">{s.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}