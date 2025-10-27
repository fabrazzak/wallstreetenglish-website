import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-[1180px] mx-auto px-4 py-8 md:py-16">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-6 md:mb-8 pb-6 md:pb-8">
          {/* Navigation Columns */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left Navigation */}
              <div className="w-full md:w-1/2">
                <nav>
                  <ul className="space-y-2 md:space-y-3">
                    <li>
                      <Link
                        href="/prices/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Prices
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/reviews/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right Navigation */}
              <div className="w-full md:w-1/2">
                <nav>
                  <ul className="space-y-2 md:space-y-3">
                    <li>
                      <Link
                        href="/about-us/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers-in-english/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://franchise.wallstreetenglish.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Franchising
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/news/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        News and PR
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mediaroom/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Media room
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/corporate-policies/"
                        className="text-[14px] md:text-[16px] text-black/65 hover:text-[#de1135] transition-colors block"
                      >
                        Corporate policies
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Social + Company Info */}
          <div className="w-full lg:w-1/2 lg:text-right">
            <p className="text-[12px] md:text-[14px] text-[#000000a6] leading-relaxed whitespace-pre-line mb-4 md:mb-6 text-center lg:text-left xl:text-right">
              {`WSE Hong Kong Ltd
Rm. 2608, W50
50 Wong Chuk Hang Road
Hong Kong

Registered number: 2587136
ISO 9001:2015`}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4">
              <Link
                href="https://facebook.com/wallstreetenglish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] text-[#000000a6] hover:text-[#de1135] transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/wallstreetenglish_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] text-[#000000a6] hover:text-[#de1135] transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/wall-street-english"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] text-[#000000a6] hover:text-[#de1135] transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.youtube.com/wallstreetenglish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] text-[#000000a6] hover:text-[#de1135] transition-colors"
              >
                YouTube
              </Link>
              <Link
                href="https://x.com/WSE_Global"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] text-[#000000a6] hover:text-[#de1135] transition-colors"
              >
                X (Twitter)
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 md:pt-6 border-t border-gray-200">
          <p className="text-[14px] md:text-[16px] text-[#00000059] text-center md:text-left mb-3 md:mb-0">
            © {currentYear} WSE Hong Kong Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            <Link
              href="/website-terms/"
              className="text-[12px] md:text-[14px] text-[#00000059] hover:text-[#de1135] transition-colors"
            >
              Website terms
            </Link>
            <Link
              href="/privacy-policy/"
              className="text-[12px] md:text-[14px] text-[#00000059] hover:text-[#de1135] transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/cookie-policy/"
              className="text-[12px] md:text-[14px] text-[#00000059] hover:text-[#de1135] transition-colors"
            >
              Cookie policy
            </Link>
            <Link
              href="/sitemap-0.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] md:text-[14px] text-[#00000059] hover:text-[#de1135] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}