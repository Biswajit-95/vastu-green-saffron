// components/Footer.jsx
import React from "react";
import { Sun, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-primary text-white rounded-full">
                <Sun className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-bold text-brand-dark">
                Digital<span className="text-brand-primary">Vastu</span>
              </span>
            </div>

            <p className="text-gray-500 max-w-sm mb-6 font-light text-sm leading-relaxed">
              Bringing the ancient science of Vastu Shastra into the digital
              age. Creating spaces that breathe, heal, and prosper.
            </p>

            <div className="flex gap-4">
              <a className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-6 text-xs uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3 text-gray-500 text-sm font-light">
              <li>Home Consultation</li>
              <li>Office Vastu</li>
              <li>Factory Layout</li>
              <li>Plot Selection</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-6 text-xs uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 text-gray-500 text-sm font-light">
              <li>About Us</li>
              <li>Success Stories</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 uppercase tracking-wider flex flex-col md:flex-row justify-between">
          <p>© 2024 Digital Vastu. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-brand-primary">Privacy</a>
            <a className="hover:text-brand-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
