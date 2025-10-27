// components/PracticeSpeaking.js
import React from "react";

export default function PracticeSpeaking() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-6 md:gap-8">
      {/* Text Content */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold mb-4 text-[#003359] text-center md:text-left">
          Practice speaking without limits
        </h2>
        <div className="text-[#000000a6] text-[14px] md:text-[16px] space-y-3 md:space-y-4 mb-6 text-center md:text-left">
          <p>
            With Speak+ you can attend as many online classes as you want to
            build confidence and practice speaking.
          </p>
          <p>
            Discover how it works and why this is the perfect combination with
            your English course.
          </p>
        </div>
        <div className="text-center md:text-left">
          <a
            href="https://www.wallstreetenglish.com/speak-plus-english-speaking-practice/"
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border border-gray-300 rounded-lg font-bold bg-[#de1135] hover:bg-[#b30d29] text-white transition text-[14px] md:text-[16px] w-full md:w-auto justify-center"
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

      {/* Video */}
      <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          controlsList="nodownload"
          preload="metadata"
          poster="https://mktmedia.wallstreetenglish.com/small_Speak_video_thumbnail_82bd80261b.webp"
          className="w-full h-auto"
        >
          <source
            src="https://mktmedia.wallstreetenglish.com/2023_IFAC_Speak_Intro_Video_v2_no_cta_lo_res_4451c34e96.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}