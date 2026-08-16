"use client";

import React from "react";
import Link from "next/link";
import { Mail, Globe, ArrowUpRight, Heart } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter, IconInstagram } from "@/components/ui/icons";
import { socialLinks } from "@/data/social";

export function Footer() {
  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <IconGithub className="w-4 h-4" />;
      case "LinkedIn":
        return <IconLinkedin className="w-4 h-4" />;
      case "X (Twitter)":
        return <IconTwitter className="w-4 h-4" />;
      case "Instagram":
        return <IconInstagram className="w-4 h-4" />;
      case "Email":
        return <Mail className="w-4 h-4" />;
      case "TECHVIMAN":
        return <Globe className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-extrabold text-white tracking-wider">ABADURRAHMAN</h2>
            </Link>
            <p className="text-sm text-blue-400 font-mono">Developer • Entrepreneur • Builder • Technology Creator</p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Building WebAR products, AI tools, full-stack applications, and scaling TECHVIMAN startup initiatives. CS Engineering Student turning ideas into working digital businesses.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Available for collaborations
              </span>
            </div>
          </div>

          {/* Core Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">Platform Navigation</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">About Abadurrahman</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition">Work & Projects</Link>
              </li>
              <li>
                <Link href="/techviman" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                  TECHVIMAN Startup <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition">Engineering Skills</Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-blue-400 transition">Technology Lab</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">Daily Knowledge Blog</Link>
              </li>
              <li>
                <Link href="/now" className="hover:text-blue-400 transition">Currently Building</Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-blue-400 transition">Resume</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">Connect & Links</p>
            <div className="flex flex-col space-y-2.5 text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition group"
                >
                  <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/50 group-hover:text-blue-400 transition">
                    {getSocialIcon(link.name)}
                  </span>
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-600 font-mono ml-auto">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Abadurrahman. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            Designed & Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for TECHVIMAN Ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
