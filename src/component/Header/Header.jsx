'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const navigationItems = [
    {
      title: 'How you learn',
      href: 'https://www.wallstreetenglish.com/how-you-learn-english/',
      dropdown: [
        { title: 'How you learn', href: 'https://www.wallstreetenglish.com/how-you-learn-english/' },
        { title: 'Online', href: 'https://www.wallstreetenglish.com/learn-english-online/' },
        { title: 'Full access', href: 'https://www.wallstreetenglish.com/full-access-english-schools/' },
        { title: 'Private', href: 'https://www.wallstreetenglish.com/private-english-course/' },
        { title: 'English teachers', href: 'https://www.wallstreetenglish.com/your-english-teachers/' },
        { title: 'Global classroom', href: 'https://www.wallstreetenglish.com/global-online-classroom/' },
      ],
    },
    {
      title: 'Adults',
      href: 'https://www.wallstreetenglish.com/english-courses/',
      dropdown: [
        { title: 'Spoken English classes', href: 'https://www.wallstreetenglish.com/speak-plus-english-speaking-practice/' },
        { title: 'English for adults', href: 'https://www.wallstreetenglish.com/english-courses/adults/' },
        { title: 'English for your career', href: 'https://www.wallstreetenglish.com/english-courses/careers/' },
        { title: 'English for students', href: 'https://www.wallstreetenglish.com/english-courses/student/' },
        { title: 'English for travel', href: 'https://www.wallstreetenglish.com/english-courses/travel/' },
        { title: 'Online English course', href: 'https://www.wallstreetenglish.com/english-courses/online-course/' },
        { title: 'English course planner', href: 'https://www.wallstreetenglish.com/english-course-planner/' },
      ],
    },
    {
      title: 'Teens',
      href: '',
      dropdown: [
        { title: 'English for your child', href: 'https://www.wallstreetenglish.com/english-for-your-child/' },
        { title: 'Teens English course', href: 'https://www.wallstreetenglish.com/english-courses/teens/' },
        { title: 'Teen course plans', href: 'https://www.wallstreetenglish.com/teen-course-plans/' },
      ],
    },
    {
      title: 'Corporate',
      href: 'https://www.wallstreetenglish.com/corporate-english-course/',
      dropdown: [
        { title: 'Corporate solutions', href: 'https://www.wallstreetenglish.com/corporate-solutions/' },
        { title: 'Corporate online course', href: 'https://www.wallstreetenglish.com/english-courses/online-corporate/' },
        { title: 'Business Partner course', href: 'https://www.wallstreetenglish.com/english-courses/business-partner/' },
      ],
    },
    {
      title: 'Certifications',
      href: 'https://www.wallstreetenglish.com/certifications/',
      dropdown: [
        { title: 'IELTS', href: 'https://www.wallstreetenglish.com/certifications/ielts-exam/' },
        { title: 'TOEFL', href: 'https://www.wallstreetenglish.com/certifications/toefl-exam/' },
        { title: 'TOEIC', href: 'https://www.wallstreetenglish.com/certifications/toeic-exam/' },
        { title: 'PTE', href: 'https://www.wallstreetenglish.com/certifications/pearson-test-of-english-pte/' },
        { title: 'Exam preparation courses', href: 'https://www.wallstreetenglish.com/english-courses/exam-preparation/' },
      ],
    },
    {
      title: 'Careers',
      href: 'https://www.wallstreetenglish.com/careers-in-english/',
      dropdown: [
        { title: 'Teaching', href: 'https://www.wallstreetenglish.com/teaching-at-wall-street-english/' },
        { title: 'Corporate roles', href: 'https://www.wallstreetenglish.com/corporate-roles/' },
        { title: 'Job board', href: 'https://www.wallstreetenglish.com/careers/' },
      ],
    },
    {
      title: 'Our Locations',
      href: 'https://www.wallstreetenglish.com/our-locations/',
    },
    {
      title: 'Franchising',
      href: 'https://franchise.wallstreetenglish.com/',
      external: true,
    },
    {
      title: 'Resources',
      href: 'https://franchise.wallstreetenglish.com/?_gl=1%2A1xwbnku%2A_ga%2AMTQwMDkyNzI4MC4xNzYxMjM3Mjc3%2A_ga_GMYY0P9Z4N%2AczE3NjE1OTY3ODQkbzE1JGcxJHQxNzYxNjAwNTMzJGo2MCRsMCRoMA..',
      dropdown: [
        { title: 'Blog', href: 'https://www.wallstreetenglish.com/blog/' },
        { title: 'Exercises', href: 'https://www.wallstreetenglish.com/exercises/' },
        { title: 'English tests', href: 'https://www.wallstreetenglish.com/english-tests/' },
        { title: 'English levels', href: 'https://www.wallstreetenglish.com/english-levels/' },
      ],
    },
  ];

 const countryLinksByRegion = {
  "Asia Pacific": [
    { name: 'China - Hong Kong', href: 'https://www.wallstreetenglish.edu.hk/', code: 'HK', flag: 'https://flagcdn.com/hk.svg' },
    { name: 'Indonesia', href: 'https://wallstreetenglish.co.id/', code: 'ID', flag: 'https://flagcdn.com/id.svg' },
    { name: 'Kazakhstan', href: 'https://wallstreetenglish.kz/', code: 'KZ', flag: 'https://flagcdn.com/kz.svg' },
    { name: 'Laos', href: 'https://www.wallstreetenglish.la/', code: 'LA', flag: 'https://flagcdn.com/la.svg' },
    { name: 'Mongolia', href: 'https://www.wallstreetenglish.mn/', code: 'MN', flag: 'https://flagcdn.com/mn.svg' },
    { name: 'Myanmar', href: 'https://wallstreetenglish.edu.mm/', code: 'MM', flag: 'https://flagcdn.com/mm.svg' },
    { name: 'Thailand', href: 'https://www.wallstreetenglish.in.th/', code: 'TH', flag: 'https://flagcdn.com/th.svg' },
    { name: 'Vietnam', href: 'https://www.wallstreetenglish.edu.vn/', code: 'VN', flag: 'https://flagcdn.com/vn.svg' },
  ],
  "Europe / Middle East / Africa": [
    { name: 'Algeria', href: 'https://www.wallstreetenglish.dz/', code: 'DZ', flag: 'https://flagcdn.com/dz.svg' },
    { name: 'Czech Republic', href: 'https://wallstreetenglish.cz/', code: 'CZ', flag: 'https://flagcdn.com/cz.svg' },
    { name: 'Israel', href: 'https://www.wallstreet-english.co.il/', code: 'IL', flag: 'https://flagcdn.com/il.svg' },
    { name: 'Libya', href: 'https://www.wallstreetenglish.ly/', code: 'LY', flag: 'https://flagcdn.com/ly.svg' },
    { name: 'Morocco', href: 'https://www.wallstreetenglish.ma/', code: 'MA', flag: 'https://flagcdn.com/ma.svg' },
    { name: 'Oman', href: 'https://www.wallstreetenglish.om/', code: 'OM', flag: 'https://flagcdn.com/om.svg' },
    { name: 'Poland', href: 'https://www.wallstreetenglish.pl/', code: 'PL', flag: 'https://flagcdn.com/pl.svg' },
    { name: 'Portugal', href: 'https://www.wsenglish.pt/', code: 'PT', flag: 'https://flagcdn.com/pt.svg' },
    { name: 'Saudi Arabia', href: 'https://wallstreetenglish.edu.sa/', code: 'SA', flag: 'https://flagcdn.com/sa.svg' },
    { name: 'Spain', href: 'https://www.wallstreetenglish.es/', code: 'ES', flag: 'https://flagcdn.com/es.svg' },
    { name: 'Switzerland', href: 'https://www.wallstreetenglish.ch/', code: 'CH', flag: 'https://flagcdn.com/ch.svg' },
    { name: 'Tunisia', href: 'https://wallstreetenglish.tn/', code: 'TN', flag: 'https://flagcdn.com/tn.svg' },
    { name: 'Turkey', href: 'https://wse.com.tr/', code: 'TR', flag: 'https://flagcdn.com/tr.svg' },
  ],
  "Latin America": [
    { name: 'Argentina', href: 'https://www.wallstreetenglish.com.ar/', code: 'AR', flag: 'https://flagcdn.com/ar.svg' },
    { name: 'Chile', href: 'https://www.wallstreetenglish.cl/', code: 'CL', flag: 'https://flagcdn.com/cl.svg' },
    { name: 'Colombia', href: 'https://www.wse.edu.co/', code: 'CO', flag: 'https://flagcdn.com/co.svg' },
    { name: 'Dominican Republic', href: 'https://wallstreetenglish.com.do/', code: 'DO', flag: 'https://flagcdn.com/do.svg' },
    { name: 'Ecuador', href: 'https://www.wallstreetenglish.com.ec/', code: 'EC', flag: 'https://flagcdn.com/ec.svg' },
    { name: 'Guatemala', href: 'https://www.wallstreetenglish.com.gt/', code: 'GT', flag: 'https://flagcdn.com/gt.svg' },
    { name: 'Panama', href: 'https://www.wallstreetenglish.com.mx/', code: 'PA', flag: 'https://flagcdn.com/pa.svg' },
    { name: 'Peru', href: 'https://www.wallstreetenglish.com.pa/', code: 'PE', flag: 'https://flagcdn.com/pe.svg' },
    { name: 'Uruguay', href: 'https://www.wallstreetenglish.edu.uy/', code: 'UY', flag: 'https://flagcdn.com/uy.svg' },
    { name: 'Venezuela', href: 'https://www.wallstreetenglish.com.ve/', code: 'VE', flag: 'https://flagcdn.com/ve.svg' },
  ]
};


  const toggleDropdown = (title) => {
    setIsDropdownOpen(isDropdownOpen === title ? null : title);
  };

  const GlobeIcon = () => (
    <svg className=" md:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0C3.58161 0 0 3.58161 0 8C0 12.4184 3.58161 16 8 16C12.4184 16 16 12.4184 16 8C16 3.58161 12.4184 0 8 0ZM10.6545 11.5355C10.5287 11.6606 10.3968 11.7919 10.2897 11.8994C10.1932 11.9961 10.1252 12.1155 10.0906 12.2448C10.0419 12.4274 10.0026 12.6119 9.93677 12.789L9.37581 14.3003C8.93194 14.3971 8.47258 14.4516 8 14.4516V13.5684C8.05452 13.1613 7.75355 12.3987 7.27 11.9152C7.07645 11.7216 6.96774 11.459 6.96774 11.1852V10.1526C6.96774 9.7771 6.76548 9.43194 6.43677 9.25032C5.97323 8.99387 5.31387 8.63548 4.86226 8.40806C4.49194 8.22161 4.14935 7.98419 3.84129 7.70645L3.81548 7.68323C3.59518 7.48437 3.39958 7.25974 3.2329 7.01419C2.93032 6.57 2.43742 5.83935 2.1171 5.36452C2.77742 3.89677 3.96742 2.71806 5.44613 2.07774L6.22064 2.46516C6.56387 2.63677 6.96774 2.38742 6.96774 2.00355V1.63903C7.22548 1.59742 7.48774 1.57097 7.75452 1.56097L8.66742 2.47387C8.86903 2.67548 8.86903 3.00226 8.66742 3.20387L8.51613 3.35484L8.18258 3.68839C8.08193 3.78903 8.08193 3.95258 8.18258 4.05323L8.33387 4.20452C8.43452 4.30516 8.43452 4.46871 8.33387 4.56935L8.07581 4.82742C8.02735 4.87578 7.96168 4.90293 7.89323 4.9029H7.60323C7.53613 4.9029 7.47161 4.92903 7.42323 4.97613L7.10323 5.28742C7.064 5.32562 7.03793 5.37529 7.02876 5.42927C7.0196 5.48325 7.02783 5.53874 7.05226 5.58774L7.55516 6.59387C7.64097 6.76548 7.51613 6.96742 7.32452 6.96742H7.14258C7.08032 6.96742 7.02032 6.94484 6.97355 6.90419L6.67419 6.64419C6.60645 6.58543 6.52458 6.5453 6.43663 6.52777C6.34868 6.51023 6.25768 6.5159 6.17258 6.54419L5.1671 6.87935C5.09033 6.90495 5.02357 6.95406 4.97627 7.01971C4.92896 7.08537 4.90352 7.16424 4.90355 7.24516C4.90355 7.39129 4.98613 7.52452 5.11677 7.59L5.47419 7.76871C5.77774 7.92064 6.11258 7.99968 6.45194 7.99968C6.79129 7.99968 7.18064 8.88 7.48419 9.03193H9.63742C9.91129 9.03193 10.1735 9.14064 10.3674 9.33419L10.809 9.77581C10.9935 9.96037 11.0971 10.2107 11.0971 10.4716C11.097 10.6694 11.0579 10.8651 10.9819 11.0477C10.906 11.2303 10.7947 11.396 10.6545 11.5355ZM13.4516 8.58871C13.2648 8.54193 13.1019 8.42742 12.9952 8.2671L12.4152 7.3971C12.3303 7.26999 12.285 7.12058 12.285 6.96774C12.285 6.8149 12.3303 6.6655 12.4152 6.53839L13.0471 5.59064C13.1219 5.47871 13.2245 5.38774 13.3452 5.32774L13.7639 5.11839C14.2 5.98677 14.4516 6.96355 14.4516 8C14.4516 8.27968 14.4277 8.55355 14.3929 8.82387L13.4516 8.58871Z"
        fill="#CDDEFF"
        fillOpacity="0.35"
      />
    </svg>
  );

  const ChevronIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-[#003359] py-4">
        <div className="max-w-[1180px] mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Promotion */}
            <div className="flex-1">
              <Link
                href="https://www.wallstreetenglish.com/promotions/offer"
                className="md:block max-w-max bg-[#136DD3] hidden rounded-lg p-2  transition-colors"
              >
                <div className="flex flex-col   text-white px-2">
                  <span className="font-semibold flex gap-2">Go further with English

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>

                  <span className="text-[16px] opacity-90">Start learning</span>
                </div>
              </Link>
            </div>

            {/* Top Bar Links */}
            <div className=" gap-6 flex  justify-between items-center w-full md:w-auto ">
              {/* Start Learning CTA */}
              <Link
                href="/#form"
                className="bg-[#4DD4F5] text-[#023742] hidden md:flex  mr-4 px-6 py-2 rounded-full font-bold  transition-colors text-[16px]"
              >
                Start learning
              </Link>

              {/* Login Dropdown */}
              <div className="relative order-1 md:order-0 ">
                <a href='https://world.wallstreetenglish.com/' className="flex items-center gap-2 cursor-pointer text-[#cddeff] text-[16px]">
                  Login
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M11.5 8C12.3284 8 13 8.67157 13 9.5V10C13 11.9714 11.1405 14 8 14C4.85951 14 3 11.9714 3 10V9.5C3 8.67157 3.67157 8 4.5 8H11.5ZM11.5 9H4.5C4.22386 9 4 9.22386 4 9.5V10C4 11.4376 5.43216 13 8 13C10.5678 13 12 11.4376 12 10V9.5C12 9.22386 11.7761 9 11.5 9ZM8 1.5C9.51878 1.5 10.75 2.73122 10.75 4.25C10.75 5.76878 9.51878 7 8 7C6.48122 7 5.25 5.76878 5.25 4.25C5.25 2.73122 6.48122 1.5 8 1.5ZM8 2.5C7.0335 2.5 6.25 3.2835 6.25 4.25C6.25 5.2165 7.0335 6 8 6C8.9665 6 9.75 5.2165 9.75 4.25C9.75 3.2835 8.9665 2.5 8 2.5Z"
                      fill="#CDDEFF"
                      stroke="#CDDEFF"
                      strokeWidth="0.5"
                    />
                  </svg>

                </a>
              </div>

              {/* Country/Language Selector */}
              <div className="relative" data-testid="select-country">
                <button
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className=" cursor-pointer flex items-center gap-2 text-[#cddeff] text-[16px]  rounded-md px-3 py-1  transition-colors"
                >
                  <div className="flex cu items-center gap-2 text-[#cddeff] text-[16px]">
                    <div className='flex items-center gap-2'>
                      <span  className=""> <GlobeIcon></GlobeIcon></span>
                      Global</div>
                  </div>
                  <div className={`transition-transform  text-[#cddeff] ${isCountryDropdownOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-[#cddeff] w-6 h-6" />
                  </div>
                </button>

                {/* Country Dropdown Menu */}
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {Object.entries(countryLinksByRegion).map(([region, countries]) => (
                      <div key={region} className="py-2">
                        {/* Region Divider / Header */}
                        <div className="px-4 py-2 text-[14px] font-semibold text-black uppercase tracking-wide border-b border-gray-100">
                          {region}
                        </div>

                        {/* Countries */}
                        {countries.map((country, index) => (
                          <Link
                            key={index}
                            href={country.href}
                            className="flex items-center gap-3 px-4 py-2 text-[16px] text-gray-700 hover:bg-blue-50 hover:text-[#de1135] transition-colors"
                            onClick={() => setIsCountryDropdownOpen(false)}
                          >
                            <img
                              src={country.flag}
                              alt={`${country.name} flag`}
                              className="w-5 h-4 rounded-sm object-cover border border-gray-200"
                            />
                            <span className="flex-1">{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className=" border-gray-200">
        <div className="max-w-[1180px] mx-auto px-4">
          <nav className="flex items-center justify-between md:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/logo.webp" alt="logo"  className='w-[120px]'/>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.external ? (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-[#de1135] font-medium text-[16px] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : item.dropdown ? (
                    <div className="flex items-center gap-1 cursor-pointer group">
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-[#de1135] font-medium text-[16px] transition-colors"
                      >
                        {item.title}
                      </Link>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-[16px] text-[#0a0a0a] hover:bg-blue-50 hover:text-[#de1135] transition-colors"
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#de1135] font-medium text-[16px] transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <Link
                href="/#form"
                className="bg-[#4dd4f5]  text-[#023742] px-4 py-2  mr-2 rounded-full font-semibold text-[16px] transition-colors"
              >
                Start learning
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-[#de1135] transition-colors"
              >
                <div className="w-6 flex flex-col gap-1">
                  <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="flex items-center justify-between w-full py-3 text-left text-gray-700 font-medium"
                        >
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform ${isDropdownOpen === item.title ? 'rotate-90' : ''}`}
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                        {isDropdownOpen === item.title && (
                          <div className="ml-4 space-y-2 mt-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className="block py-2 text-gray-600 hover:text-[#de1135] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 text-gray-700 font-medium hover:text-[#de1135] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Country Selector */}
             

              {/* Mobile Promotion */}
              
            </div>
          )}
        </div>
      </div>

      <div className='md:hidden'>
        <Link
                href="/promotions/offer"
                className="block bg-[#136DD3]  px-4 py-2 text-white  transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Go further with English</p>
                    <p className="text-[16px] opacity-90">Start learning</p>
                  </div>
                  
                </div>
              </Link>
      </div>
    </header>
  );
}