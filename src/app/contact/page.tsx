"use client";

import React, { useState } from "react";
import { Mail, Globe, Send, CheckCircle2 } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter, IconInstagram } from "@/components/ui/icons";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">LET'S BUILD SOMETHING MEANINGFUL</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          Have a web application project, WebAR concept, AI tool requirement, or startup inquiry for TECHVIMAN? Send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8 glass-card p-8 rounded-3xl border border-slate-800 bg-slate-950/80">
          <div>
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <p className="text-xs text-slate-400 mt-1">Direct channels to connect with Abadurrahman.</p>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs font-mono text-slate-500">Email Address</p>
                <p className="font-semibold text-white">contact@techviman.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs font-mono text-slate-500">Startup Website</p>
                <a href="https://techviman.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-400 hover:underline">
                  https://techviman.com/
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <p className="text-xs font-mono text-slate-400 font-semibold uppercase">Verified Profiles:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="https://github.com/rahman2428" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition">
                <IconGithub className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/abadur-rahman-056582312/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition">
                <IconLinkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your message has been received. Abadurrahman will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h2>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="sarah@tech.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project Consultation / WebAR Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Message Detail</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your product idea or collaboration inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending Message..." : <>Submit Inquiry <Send className="w-4 h-4" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
