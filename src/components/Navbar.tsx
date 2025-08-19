'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import OfficeHours from './OfficeHours';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'News', href: '/news' },
  { label: 'Departments', href: '/departments' },
  { label: 'Events', href: '/events' },
  { label: 'Media', href: '/media' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-3 xl:py-4 transition-colors duration-500 ease-in-out ${
        scrolled ? 'bg-[#06163A] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-[90%] lg:w-full pb-0 md:pb-2 px-0 lg:px-10 mx-auto flex items-center justify-between h-full lg:border-b lg:border-gray-300">
        
        {/* Logo */}
        <div className="flex items-center pb-2">
          <Link href="/">
            <Image src="/images/IMSG-Logo.svg" alt="logo" width={40} height={20} className='object-contain' />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="font-satoshi space-x-6 gap-2 xl:gap-10 text-[16px] md:text-[12px] xl:text-[16px] font-bold hidden lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? 'text-green-400 font-semibold hover:text-green-500 transition duration-300 ease-in-out border-b-2 border-green-400 pb-1'
                    : 'text-white hover:text-green-400 transition duration-300 ease-in-out'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden absolute right-4 top-4 z-40 cursor-pointer"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="32" height="32" stroke="black" strokeWidth="2" viewBox="0 0 24 24" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Office Hours */}
      <OfficeHours />
    </nav>
  )
}
