// components/PricingPlans.js
import React from "react";

/* ✅ Helper Icon Component */
export function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#C8C8C8"
            className="w-5 h-5 mt-0.5 flex-shrink-0"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

export default function PricingPlans() {
    return (
        <section className="py-12 md:py-16">
            <div className="max-w-[1180px] mx-auto px-4">
                {/* ✅ Heading Section */}
                <div className="border-b text-gray-300">
                    <div className="max-w-lg mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-[56px] text-[#003359] font-bold mb-4 leading-tight">
                            Select the right plan for you
                        </h2>
                        <p className="text-[#000000f2] mt-6 md:mt-8 text-[16px] md:text-[18px] leading-relaxed">
                            All Wall Street English course plans are based on our proven
                            guaranteed learning method. Watch our educational TV series, study
                            interactive lessons, and join our small group classes with a maximum
                            of 3 other students or 1-1 classes with highly-qualified teachers.
                            Boost your fluency by joining additional conversation classes and
                            events to improve your speaking skills quickly in real-life
                            situations. You can be confident that however you choose to study,
                            our personal coaches will make sure that you make progress and
                            achieve your learning goals.
                        </p>
                    </div>
                </div>

                {/* ✅ Pricing Plans Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-[800px] mx-auto py-8 md:py-16 px-2 md:px-4 mt-4">
                    {/* 🧠 Online Plan */}
                    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4 md:p-6 flex flex-col justify-between">
                        <div className="px-2 md:px-6">
                            <h3 className="text-xl md:text-[28px] font-bold text-[#003057] mb-4 mt-6 md:mt-10">
                                Online
                            </h3>
                            <p className="text-[#000000a6] mb-6 leading-relaxed text-[14px] md:text-[15px]">
                                Learn flexibly from anywhere by accessing our Global Online
                                Classroom. Get the same level of expert teaching and personal
                                support you'd get in-person.
                            </p>
                        </div>

                        <ul className="space-y-2 text-[14px] md:text-[15px] mb-6">
                            {[
                                "Online",
                                "Educational TV series",
                                "Interactive English lessons",
                                "Classes with 3 other students",
                                "Personal coaching sessions",
                                "Extra practice classes",
                                "Social events",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="opacity-50 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/#form"
                            className="text-[#E4002B] font-semibold hover:underline text-[14px] md:text-[15px] mb-4 inline-block"
                        >
                            Learn more →
                        </a>

                        <hr className="border-gray-200 my-4" />

                        <div className="px-2 md:px-6">
                            <a
                                href="https://www.wallstreetenglish.com/"
                                className="inline-flex items-center gap-2 px-3 py-2 md:py-3 border-2 md:border-3 border-[#E60028] rounded text-[#E60028] font-semibold hover:bg-gray-100 transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
                            >
                                Sign up Now
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

                    {/* 🌟 Full Access Plan */}
                    <div className="relative bg-white border border-gray-200 rounded-md shadow-md p-4 md:p-6 flex flex-col justify-between">
                        {/* Most Popular Tag */}
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2  md:-translate-x-1   md:left-auto md:transform-none md:-right-4 w-[200px] md:w-[345px] bg-[#de1135] shadow-md px-3 md:px-4 py-2 md:py-3">
                            <span className="text-white text-[14px] md:text-[18px] font-semibold text-center w-full block">
                                Most popular
                            </span>
                        </div>

                        <div className="px-2 md:px-6">
                            <h3 className="text-xl md:text-[28px] font-bold text-[#003057] mb-4 mt-8 md:mt-10">
                                Full Access
                            </h3>
                            <p className="text-[#000000a6] mb-6 leading-relaxed text-[14px] md:text-[15px]">
                                Get the complete flexibility to study both online and in-person
                                with full support from our highly-qualified teachers and coaches.
                                Access our school's total English environment to improve your
                                fluency.
                            </p>
                        </div>

                        <ul className="space-y-2 text-[14px] md:text-[15px] mb-6">
                            {[
                                "Online and in our schools",
                                "Educational TV series",
                                "Interactive English lessons",
                                "Classes with 3 other students",
                                "Personal coaching sessions",
                                "Extra practice classes",
                                "Social events",
                                "Access to our school's total English environment",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="opacity-50 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/#form"
                            className="text-[#E4002B] font-semibold hover:underline text-[14px] md:text-[15px] mb-4 inline-block"
                        >
                            Learn more →
                        </a>

                        <hr className="border-gray-200 my-4" />

                        <div className="px-2 md:px-6">
                            <a href="https://www.wallstreetenglish.com/" className="bg-[#E4002B] hover:bg-[#b80020] text-white font-semibold px-4 md:px-5 py-2.5 md:py-3 rounded-md flex items-center justify-center gap-2 transition text-[14px] md:text-[16px] w-full">
                                Sign up now →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}