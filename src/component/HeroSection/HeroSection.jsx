"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-[#e2e8f0cc] w-full">
            <div className="max-w-[1180px] mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">
                {/* ===== Left Content ===== */}
                <div className="relative">
                    {/* Speech Bubble */}
                    <div className="bg-[#cddeff] rounded-2xl px-6 py-3 absolute right-40 -top-2 lg:block hidden">
                        <p className="text-[16px] font-bold text-[#003359]">Learn English. Dream of more</p>
                        <img className="absolute right-8 -bottom-4 rotate-45" src="/more-symbol.svg" alt="more symbol" />
                    </div>

                    {/* Mobile Speech Bubble */}
                    <div className="bg-[#cddeff] rounded-2xl px-4 py-3 mb-4 lg:hidden block w-full max-w-[280px] mx-auto">
                        <p className="text-[14px] font-bold text-[#003359] text-center">Learn English. Dream of more</p>
                        <img className="absolute right-6 -bottom-3 rotate-45 w-4 h-4 lg:hidden" src="/more-symbol.svg" alt="more symbol" />
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#003359] leading-tight md:leading-snug mb-6 mt-4 lg:mt-20">
                        Achieve your goals with Wall Street English
                    </h1>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6 max-w-[400px]">
                        {[
                            "Proven method with guaranteed results",
                            "Full flexibility – join classes online and in-person in one of our schools",
                            "Course prices based on your English level and course length",
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 mt-1 lg:mt-0"
                                >
                                    <circle cx="12" cy="12" r="10" fill="#4dd4f5" />
                                    <path
                                        d="M15.22 8.97L10.75 13.44l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0-1.06-1.06z"
                                        fill="#000000"
                                    />
                                </svg>
                                <p className="text-[#000000a6] text-[14px] md:text-[16px]">{text}</p>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/#form"
                        className="inline-flex items-center gap-2 bg-[#de1135] hover:bg-[#b30d29] text-white font-semibold px-6 py-3 rounded transition text-[14px] md:text-[16px] w-full lg:w-auto justify-center"
                    >
                        Get your course price
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>

                {/* ===== Right Courses Grid ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        {
                            href: "/english-courses/adults/",
                            img: "/adult.jpg",
                            text: "Adults - English Course",
                        },
                        {
                            href: "/english-courses/online-course/",
                            img: "/online-english.jpg",
                            text: "Online - English Course",
                        },
                        {
                            href: "/english-courses/exam-preparation/",
                            img: "/exam.jpg",
                            text: "Exam Preparation Courses",
                        },
                        {
                            href: "/english-courses/teens/",
                            img: "/teens.jpg",
                            text: "Teens - English Course",
                        },
                    ].map((course, idx) => (
                        <Link
                            key={idx}
                            href={course.href}
                            className="group block overflow-hidden relative rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src={course.img}
                                alt={course.text}
                                width={500}
                                height={333}
                                className="w-full h-48 md:h-60 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 w-full">
                                <div className="p-4 rounded bg-[#e2e8f0cc] m-1">
                                    <h4 className="flex items-center justify-between text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-gray-900 gap-4">
                                        {course.text}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-70 group-hover:opacity-100 transition flex-shrink-0"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* ===== Banner Section ===== */}
            <div className="relative w-full mt-12 max-w-[1180px] mx-auto px-4">
                <Image
                    src="/home-banner.jpg"
                    alt="Wall Street English promotion"
                    width={1128}
                    height={412}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                />
                <div className="absolute inset-0 flex flex-col justify-end items-start  rounded-2xl p-6 md:p-10">
                   <div className="max-w-lg">
                     <p className="text-[#ebd5ff] text-[16px] md:text-[18px] mb-2 font-medium">Aim higher.</p>
                    <p className="text-white text-xl md:text-2xl lg:text-[32px] font-extrabold">
                        Flexible English courses online and in-person.
                    </p>
                   </div>
                </div>
            </div>
        </section>
    );
}