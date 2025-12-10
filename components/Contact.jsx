// components/Contact.jsx
import React from "react";
import Button from "./Button";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";

export default function Contact() {
  return (
    <section id={"CONTACT"} className="py-24 bg-brand-bg relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-rhombus opacity-20 hidden md:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-brand-bg border border-gray-200 focus:border-brand-primary outline-none transition-all font-serif"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-brand-bg border border-gray-200 focus:border-brand-primary outline-none transition-all font-serif"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-brand-bg border border-gray-200 focus:border-brand-primary outline-none transition-all font-serif"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Consultation Type
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-brand-bg border border-gray-200 focus:border-brand-primary appearance-none cursor-pointer text-brand-dark font-serif">
                        <option value="online">Online Consultation</option>
                        <option value="onsite">Onsite Consultation</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-brand-bg border border-gray-200 focus:border-brand-primary outline-none transition-all resize-none font-serif"
                    placeholder="Tell us about your space..."
                  ></textarea>
                </div>

                <Button
                  variant="primary"
                  fullWidth
                  className="flex items-center justify-center gap-2 mt-4"
                >
                  Send Request <Send size={16} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-brand-dark mb-6">
                Initiate Change
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed font-light">
                Our experts are ready to guide you towards a life of balance and
                abundance.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <Mail size={20} className="text-brand-primary mt-1" />
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Email
                    </div>
                    <div className="text-brand-dark font-serif text-lg">
                      consult@digitalvastu.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Phone size={20} className="text-brand-primary mt-1" />
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Phone
                    </div>
                    <div className="text-brand-dark font-serif text-lg">
                      +1 (888) 999-VASTU
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin size={20} className="text-brand-primary mt-1" />
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Studio
                    </div>
                    <div className="text-brand-dark font-serif text-lg">
                      108 Harmony Lane, Zen City
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
        </div>
      </div>
    </section>
  );
}
