"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { SearchModal } from "@/components/blog/search-modal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/projects" },
    { label: "TECHVIMAN", href: "/techviman", highlight: true },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "Lab", href: "/lab" },
    { label: "Blog", href: "/blog" },
    { label: "Now", href: "/now" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              A
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 dark:text-slate-100 tracking-wider text-base group-hover:text-blue-400 transition-colors">
                ABADURRAHMAN
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-400 tracking-widest font-mono uppercase">
                Dev • Founder
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    item.highlight
                      ? "text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20"
                      : isActive
                      ? "text-white bg-blue-600/30 border border-blue-500/40"
                      : "text-slate-300 dark:text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.highlight && <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition"
            >
              <Search className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline font-mono text-[11px]">Cmd + K</span>
            </button>

            {/* Talk CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
            >
              Let's Talk
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Navigation</p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium border transition ${
                  pathname === item.href
                    ? "bg-blue-600/20 border-blue-500/40 text-blue-400"
                    : "bg-slate-900/50 border-slate-800 text-slate-200 hover:bg-slate-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-center block shadow-lg shadow-blue-500/20"
            >
              Let's Talk
            </Link>
            <p className="text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Abadurrahman. All rights reserved.
            </p>
          </div>
        </div>
      )}

      {/* Cmd + K Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
