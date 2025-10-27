import Image from "next/image";

export default function WhyLearnWithUs() {
    return (
        <section className="max-w-[1180px] mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold mb-12 md:mb-16 text-center text-[#003359]">
                Why learn with Wall Street English?
            </h2>

            <div className="grid gap-8 md:gap-12 md:grid-cols-3">
                {/* === Card 1 === */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="relative w-full h-56 md:h-64 lg:h-72 mb-6">
                        {/* Desktop Speech Bubble */}
                        <div className="bg-[#cddeff] rounded-2xl z-50 px-4 md:px-6 py-3 md:py-4 absolute -left-2 md:-left-4 right-8 md:right-16 -top-6 md:-top-8 hidden md:block">
                            <p className="text-[14px] md:text-[16px] font-bold text-[#003359]">94% of our students would recommend Wall Street English*</p>
                            <img className="absolute left-6 md:left-8 -bottom-3 md:-bottom-4" src="/more-symbol.svg" alt="more symbol" />
                        </div>

                        {/* Mobile Speech Bubble */}
                        <div className="bg-[#cddeff] rounded-2xl z-50 px-4 py-3 mb-4 md:hidden block w-full max-w-[280px] mx-auto absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <p className="text-[14px] font-bold text-[#003359] text-center">94% of our students would recommend Wall Street English*</p>
                            <img className="absolute left-6 -bottom-3" src="/more-symbol.svg" alt="more symbol" />
                        </div>

                        <Image
                            src="/Center_Encounter_2025_5.webp"
                            alt="A unique blended method"
                            fill
                            className="object-cover rounded-[16px] md:rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    <div className="px-2 md:px-6 w-full">
                        <h3 className="text-xl md:text-[24px] font-semibold mb-2 md:mr-10 text-[#003359]">
                            A unique blended method
                        </h3>
                        <p className="text-[#2d3748] text-[14px] md:text-[16px] mb-4 md:mb-5 leading-relaxed md:mr-10">
                            Combining self-study with teacher-led classes makes learning fast
                            and effective.
                        </p>

                        <a
                            href="https://www.wallstreetenglish.com/how-you-learn-english/"
                            className="inline-flex items-center gap-2 px-3 py-2 md:py-3 border-2 md:border-3 border-[#E60028] rounded text-[#E60028] font-semibold hover:bg-gray-100 transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
                        >
                            Explore our method
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

                {/* === Card 2 === */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="relative w-full h-56 md:h-64 lg:h-72 mb-6">
                        <Image
                            src="/Online_2025_1.webp"
                            alt="Flexible class times"
                            fill
                            className="object-cover rounded-[16px] md:rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    <div className="px-2 md:px-6 w-full">
                        <h3 className="text-xl md:text-[24px] font-semibold mb-2 md:mr-10 text-[#003359]">
                            Flexible class times​
                        </h3>
                        <p className="text-[#2d3748] text-[14px] md:text-[16px] mb-4 md:mb-5 leading-relaxed md:mr-10">
                            No fixed timetable. Control when, where and how you study with 50,000 live classes each month with a maximum of 4 students​
                        </p>

                        <a
                            href="https://www.wallstreetenglish.com/english-courses/"
                            className="inline-flex items-center gap-2 px-3 py-2 md:py-3 mt-2 md:mt-3 border-2 md:border-3 border-[#E60028] rounded text-[#E60028] font-semibold hover:bg-gray-100 transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
                        >
                            Our English courses
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

                {/* === Card 3 === */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="relative w-full h-56 md:h-64 lg:h-72 mb-6">
                        {/* Desktop Speech Bubble */}
                        <div className="bg-[#cddeff] rounded-2xl z-50 px-4 md:px-6 py-3 md:py-4 absolute left-16 md:left-22 -right-2 md:-right-4 bottom-6 md:bottom-8 hidden md:block">
                            <p className="text-[14px] md:text-[16px] font-bold text-[#003359]">9 out of 10 of students say having a dedicated coach helps them stay motivated with their studies*</p>
                            <img className="absolute right-6 md:right-8 -bottom-3 md:-bottom-4 rotate-45" src="/more-symbol.svg" alt="more symbol" />
                        </div>

                        {/* Mobile Speech Bubble */}
                        <div className="bg-[#cddeff] rounded-2xl z-50 px-4 py-3 mb-4 md:hidden block w-full max-w-[280px] mx-auto absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                            <p className="text-[14px] font-bold text-[#003359] text-center">9 out of 10 of students say having a dedicated coach helps them stay motivated with their studies*</p>
                            <img className="absolute right-6 -bottom-3 rotate-45" src="/more-symbol.svg" alt="more symbol" />
                        </div>

                        <Image
                            src="/Center_Encounter_2025_20.webp"
                            alt="Our English teachers"
                            fill
                            className="object-cover rounded-[16px] md:rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    <div className="px-2 md:px-6 w-full">
                        <h3 className="text-xl md:text-[24px] font-semibold mb-2 md:mr-10 text-[#003359]">
                            Our English teachers
                        </h3>
                        <p className="text-[#2d3748] text-[14px] md:text-[16px] mb-4 md:mb-5 leading-relaxed md:mr-10">
                            A leading English language school with schools in 41 countries. We've helped more than 3 million students improve their English.
                        </p>

                        <a
                            href="https://www.wallstreetenglish.com/your-english-teachers/"
                            className="inline-flex items-center gap-2 px-3 py-2 md:py-3 mt-2 md:mt-3 border-2 md:border-3 border-[#E60028] rounded text-[#E60028] font-semibold hover:bg-gray-100 transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
                        >
                            Find out more
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

            <p className="mt-12 md:mt-20 text-[14px] md:text-[16px] bg-[#f7fafc] text-[#000000] px-4 md:pl-8 md:pr-10 py-3 md:py-4 rounded-2xl md:rounded-full mx-auto text-center md:text-left">
                *Based on a global survey conducted in 2025 across 2300 students.
                Additional insights from a 2022 global survey across 2000 students
                support ongoing student satisfaction.
            </p>
        </section>
    );
}