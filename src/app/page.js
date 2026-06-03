"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Compass,
  Navigation,
  Layers,
  Map,
  FileText,
  CheckSquare,
  Building2,
  Milestone,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Send,
  Award,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Clock,
  Globe,
  Share2,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    location: "",
    surveyType: "DGPS Survey",
    details: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "919633356603";
    const text = `Hello Capture Survey,\n\nI need a survey quotation.\n\n*Name:* ${quoteForm.name}\n*Phone:* ${quoteForm.phone}\n*Location:* ${quoteForm.location}\n*Survey Type:* ${quoteForm.surveyType}\n*Project Details:* ${quoteForm.details}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setQuoteModalOpen(false);
      setQuoteForm({ name: "", phone: "", location: "", surveyType: "DGPS Survey", details: "" });
    }, 2000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "919633356603";
    const text = `Hello Capture Survey,\n\nI want to get in touch.\n\n*Name:* ${contactForm.name}\n*Phone:* ${contactForm.phone}\n*Email:* ${contactForm.email}\n*Message:* ${contactForm.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: "", phone: "", email: "", message: "" });
    }, 2000);
  };

  const services = [
    {
      title: "DGPS Survey",
      icon: Compass,
      description: "High-accuracy GPS-based surveying for precise land boundaries and infrastructure projects using state-of-the-art dual frequency receivers.",
      keywords: ["Centimeter accuracy", "Control points", "Geodetic coordinates"],
    },
    {
      title: "Topographic Survey",
      icon: Navigation,
      description: "Detailed mapping of natural and man-made features, contours, elevations, and structural details for engineering planning.",
      keywords: ["Contour generation", "3D point clouds", "Feature mapping"],
    },
    {
      title: "Plot Designing & Setout",
      icon: Layers,
      description: "Accurate layout marking and architectural plotting for custom villa projects, residential subdivisions, and commercial sites.",
      keywords: ["Subdivision design", "Boundary setout", "Area calculations"],
    },
    {
      title: "Contour Survey",
      icon: Map,
      description: "Elevation and terrain mapping to support grading plans, earthworks estimation, and drainage designs for architectural clearance.",
      keywords: ["Slope analysis", "Cut & fill calc.", "Elevation profiles"],
    },
    {
      title: "Location Map Preparation",
      icon: FileText,
      description: "Official location sketches, certified site plans, and documentation support for municipal, bank, and governmental clearances.",
      keywords: ["Certified maps", "Registry support", "Scale drafting"],
    },
    {
      title: "FMB Marking",
      icon: CheckSquare,
      description: "Verification and precise physical marking of Field Measurement Book boundaries based on survey records and revenue data.",
      keywords: ["Revenue verification", "Boundary stones", "Dispute resolution"],
    },
    {
      title: "Building Setout",
      icon: Building2,
      description: "Precise marking of pile points, columns, grids, and building foundation limits to ensure flawless construction alignment.",
      keywords: ["Pile point layout", "Column grid marking", "Verticality check"],
    },
    {
      title: "Road, Bridge & Canal Survey",
      icon: Milestone,
      description: "Comprehensive corridor surveys, longitudinal profiles, cross-sections, and alignment designs for major infrastructure layouts.",
      keywords: ["Corridor alignment", "Cross-sections", "As-built surveys"],
    },
  ];

  const NAV_LINKS = ["home", "about", "services", "contact"];

  const footerServices = [
    "DGPS Survey",
    "Topographic Survey",
    "Plot Designing & Setout",
    "Contour Survey",
    "FMB Marking",
    "Building Setout",
    "Location Map Preparation",
    "Road & Canal Survey",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF8F2]">

      {/* ── Background ambient glows ── */}
      <div className="fixed top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#c5a880]/20 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] right-[-12%] w-[45vw] h-[45vw] rounded-full bg-[#202B39]/10 blur-[120px] pointer-events-none -z-10" />

      {/* ── Floating WhatsApp Widget ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919633356603?text=Hello%20Capture%20Survey%2C%20I%20need%20a%20survey%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Contact on WhatsApp"
        >
          <span className="absolute right-16 bg-[#202B39] text-white text-xs font-semibold py-1.5 px-3 rounded-lg border border-[#c5a880]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-4.88c1.56.927 3.49 1.417 5.453 1.418 5.532 0 10.032-4.5 10.035-10.034.002-2.68-1.043-5.197-2.94-7.097-1.897-1.9-4.414-2.946-7.098-2.947-5.534 0-10.04 4.5-10.04 10.037 0 2.01.527 3.975 1.53 5.728l-.997 3.638 3.73-.978zm11.233-7.22c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </a>
      </div>

      {/* ══════════════════ HEADER ══════════════════ */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled
          ? "bg-[#202B39]/95 backdrop-blur-md shadow-2xl border-b border-[#c5a880]/25"
          : "bg-transparent backdrop-blur-md border-b border-white/5"
          }`}
      >        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#8c6d4f] to-[#c5a880] flex items-center justify-center shadow-lg shadow-[#c5a880]/30">
              <Compass className="w-6 h-6 text-[#202B39] stroke-[2.5]" />
            </div>
            <div>


            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium tracking-wide capitalize transition-all duration-200 relative py-1 ${activeSection === section
                  ? "text-[#c5a880] font-semibold"
                  : "text-slate-200 hover:text-white"
                  }`}
              >
                {section === "contact" ? "Contact Us" : section}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + phone */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-[#c5a880] font-semibold font-mono text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
                <a href="tel:+919633356603" className="hover:underline hover:text-white transition-colors">
                  +91 96333 56603
                </a>
              </div>
              <a href="tel:+918606401674" className="text-slate-300 font-mono text-xs hover:text-white transition-colors">
                +91 86064 01674
              </a>
            </div>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] hover:from-[#c5a880] hover:to-[#edd9bd] text-[#202B39] font-bold px-6 py-2.5 rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c5a880]/30"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown — solid background to prevent hero bleed-through */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#202B39] border-t border-[#c5a880]/25 px-6 py-8 flex flex-col gap-6 animate-fade-in shadow-2xl">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium capitalize py-2 border-b border-[#c5a880]/20 last:border-0 transition-colors ${activeSection === section
                    ? "text-[#c5a880] font-semibold"
                    : "text-slate-200 hover:text-white"
                    }`}
                >
                  {section === "contact" ? "Contact Us" : section}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919633356603"
                className="flex items-center gap-3 text-[#c5a880] font-semibold text-base"
              >
                <div className="w-8 h-8 rounded-lg bg-[#c5a880]/15 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                +91 96333 56603
              </a>
              <a
                href="tel:+918606401674"
                className="flex items-center gap-3 text-slate-300 text-sm ml-11 hover:text-white transition-colors"
              >
                +91 86064 01674
              </a>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true); }}
              className="w-full bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] text-[#202B39] font-bold py-3 rounded-xl text-center text-sm hover:from-[#c5a880] hover:to-[#edd9bd] transition-all"
            >
              Get Free Quote
            </button>
          </div>
        )}
      </header>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        id="home" className="relative flex items-center min-h-screen overflow-hidden py-50 border-b border-[#8c6d4f]/20"
      >
        {/* Full background image.webp - highly visible and bright */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.webp"
            alt="Capture Survey — Kerala Terrain Measurement"
            fill
            className="object-cover object-[75%] md:object-center select-none opacity-85"
            priority
          />
          {/* Subtle grid scanning texture */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#c5a880 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          {/* Clean and natural dark gradient tint optimized for text readability on both mobile (vertical) and desktop (horizontal) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/40 md:bg-gradient-to-r md:from-black/88 md:via-black/65 md:to-black/35" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl flex flex-col justify-center">

            {/* Small tag badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#c5a880]/25 border border-[#c5a880]/40 text-[#c5a880] text-[10px] sm:text-xs font-semibold tracking-wide sm:tracking-wider uppercase mb-4 sm:mb-6 w-fit">
              <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c5a880] stroke-[2]" />
              Precision Land Measuring
            </div>
            {/* Headings using Montserrat weights */}
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.12] mb-6">
              Professional Land <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a880] via-[#edd9bd] to-[#8c6d4f] font-bold">
                Surveying Services
              </span>
            </h1>


            <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed font-light">
              Equipped with precision Dual-Frequency DGPS receivers and advanced digital surveying technology. We map contours, layouts, infrastructures, and FMB boundary markers with<br></br> flawless geodetic accuracy across Kerala.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] hover:from-[#c5a880] hover:to-[#edd9bd] text-[#202B39] font-semibold px-8 py-3.5 rounded-xl text-sm shadow-lg shadow-[#c5a880]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-3.5 rounded-xl border border-[#c5a880]/35 hover:border-[#c5a880]/60 bg-black/20 hover:bg-black/40 text-slate-200 hover:text-white text-sm font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>

            {/* Phone badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880]">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[7px] uppercase font-mono tracking-widest text-slate-300">Direct Call</span>
                  <a href="tel:+919633356603" className="font-semibold text-[#c5a880] text-sm hover:underline">
                    +91 96333 56603
                  </a>
                </div>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="py-28 relative bg-[#FAF8F2] border-b border-[#8c6d4f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a880]/25 shadow-2xl aspect-[4/3] lg:aspect-[4/5] glow-gold">
                <Image
                  src="/survey_contour.png"
                  alt="3D Contour Mapping Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl border border-[#c5a880]/40 shadow-xl max-w-[200px]">
                <span className="block text-3xl font-extrabold text-[#c5a880] mb-1">100%</span>
                <span className="block text-xs font-semibold text-[#202B39]">Accuracy &amp; Boundary Verification Guarantee</span>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880]">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#202B39] mt-2 mb-6 tracking-tight">
                Accurate Land Surveying Built On High-Tech Precision
              </h2>

              <p className="text-[#202B39]/80 text-md leading-relaxed mb-6">
                Capture Survey is a professional land measurement, engineering, and geodetic mapping services company operating across Kerala. We provide cutting-edge solutions for real estate boundary markings, civil development, site planning, and public works alignment.
              </p>

              <p className="text-[#202B39]/65 text-sm leading-relaxed mb-8">
                Our team is committed to assisting architects, private developers, land owners, and government entities with dependable, litigation-free mapping. We combine traditional survey wisdom with advanced DGPS receivers, digital total stations, and mapping software.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#c5a880]/30 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#202B39] text-sm">Revenue Mapping Expertise</h4>
                    <p className="text-xs text-[#202B39]/60 mt-0.5">Accurate correlation of field limits with revenue and FMB documents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#c5a880]/30 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#202B39] text-sm">Advanced DGPS Receivers</h4>
                    <p className="text-xs text-[#202B39]/60 mt-0.5">Real-time Kinematic (RTK) coordinates with low margins of error.</p>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section id="services" className="py-28 relative bg-[#FAF8F2] border-b border-[#8c6d4f]/20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880]">Our Capabilities</span>
            <h2 className="text-xl sm:text-3xl font-semibold text-[#202B39] mt-2 mb-4 tracking-tight">
              Comprehensive Land Survey Solutions
            </h2>
            <p className="text-[#202B39]/65 font-medium text-sm md:text-base">
              We offer standard-setting measurements and certified outputs for construction, zoning, mapping, and boundary validations.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden border border-[#c5a880]/30 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  {/* Gold top border */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] rounded-t-2xl" />

                  <div className="mb-4 sm:mb-6">
                    {/* Gold Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#8c6d4f] to-[#c5a880] flex items-center justify-center text-[#202B39] mb-4 sm:mb-5 shadow-lg shadow-[#c5a880]/20">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>

                    <h3 className="text-sm sm:text-lg font-semibold text-[#202B39] mb-2 sm:mb-3 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#202B39]/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-[#c5a880]/20 pt-3 sm:pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.keywords.map((kw, kwIdx) => (
                        <span
                          key={kwIdx}
                          className="text-[8px] sm:text-[9px] font-medium text-[#202B39] bg-[#c5a880]/15 py-1 px-2 sm:px-3 rounded-full border border-[#c5a880]/25"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" className="py-28 relative bg-[#FAF8F2] border-b border-[#8c6d4f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Info Column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#c5a880]">Get In Touch</span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#202B39] mt-2 mb-6 tracking-tight">
                Start Your Project Survey Today
              </h2>


              <div className="flex flex-col gap-5">

                {/* Phone card */}
                <div className="p-6 rounded-2xl bg-white border border-[#c5a880]/35 shadow-md">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] block mb-4 font-semibold">
                    Direct Contact Lines
                  </span>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
                        <Phone className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#202B39]/50 uppercase tracking-widest">Mobile (WhatsApp)</span>
                        <a href="tel:+919633356603" className="font-extrabold text-xl text-[#202B39] hover:text-[#c5a880] transition-colors">
                          +91 96333 56603
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-3 border-t border-[#c5a880]/20">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] flex items-center justify-center text-[#202B39]/60 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#202B39]/50 uppercase tracking-widest">Alternative</span>
                        <a href="tel:+918606401674" className="font-bold text-lg text-[#202B39] hover:text-[#c5a880] transition-colors">
                          +91 86064 01674
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#c5a880]/30 shadow-sm hover:border-[#c5a880]/55 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#202B39]/50 uppercase">Send Email</span>
                    <a href="mailto:capturesurvy@gmail.com" className="font-semibold text-[#202B39] hover:text-[#c5a880] transition-colors">
                      capturesurvy@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#c5a880]/30 shadow-sm hover:border-[#c5a880]/55 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#202B39]/50 uppercase">Head Office</span>
                    <p className="text-[#202B39]/80 text-sm leading-relaxed mt-0.5">
                      403/9 Aryambavu Kottopadam Road,<br />
                      Near Milma Society, Ariyoor (PO),<br />
                      678583 Aryambavu, Kerala, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Label */}
              <div className="flex items-center gap-3 mb-4">


              </div>

              {/* Map embed — full height, no dark filter */}
              <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-[#c5a880]/30 shadow-2xl shadow-[#202B39]/20 min-h-[420px] lg:min-h-0 lg:h-full">
                {/* Decorative top badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#c5a880]/25 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono text-[#202B39] uppercase tracking-wider">Live Map</span>
                </div>
                <iframe
                  title="Capture Survey Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4239850388915!2d76.3887!3d10.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzE2LjkiTiA3NsKwMjMnMTkuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-none"
                  style={{ minHeight: "420px" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              {/* Open in Google Maps CTA */}
              <a
                href="https://maps.google.com/?q=Aryambavu+Kottopadam+Road+Kerala+India"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-[#c5a880]/40 hover:border-[#c5a880] bg-white hover:bg-[#FAF8F2] text-[#202B39] hover:text-[#c5a880] text-sm font-semibold transition-all duration-300 shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="relative bg-[#202B39] text-slate-300 border-t border-[#c5a880]/30 shadow-2xl">

        {/* Gold top divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-[#c5a880]/20 flex items-center justify-center shadow-lg">
                <Compass className="w-5 h-5 text-[#c5a880] stroke-[2]" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight text-white">
                  CAPTURE SURVEY
                </span>
                <span className="block text-[8px] text-slate-400 font-mono tracking-widest leading-none font-bold">
                  PRECISION LAND MEASURING
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed mb-4 font-normal">
              Professional DGPS &amp; land surveying services across Kerala. Accurate, certified, and reliable mapping for every need.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { Icon: Globe, href: "#" },
                { Icon: Share2, href: "#" },
                { Icon: MessageCircle, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-[#c5a880] hover:text-[#202B39] flex items-center justify-center text-slate-300 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#c5a880] rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact Us", href: "#contact" },
                { label: "Get Free Quote", href: "#", action: () => setQuoteModalOpen(true) },
              ].map(({ label, href, action }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={action}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white text-xs transition-colors group font-medium"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#c5a880] transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#c5a880] rounded-full inline-block" />
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {footerServices.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white text-xs transition-colors group font-medium"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-[#c5a880] transition-colors" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#c5a880] rounded-full inline-block" />
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+919633356603" className="flex items-start gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5 group-hover:bg-[#c5a880] group-hover:text-[#202B39] transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] text-slate-400 uppercase font-mono tracking-wider font-bold">Primary Phone</span>
                    <span className="text-white font-bold text-xs transition-colors">
                      +91 96333 56603
                    </span>
                    <span className="block text-slate-400 text-[10px]">+91 86064 01674</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:capturesurvy@gmail.com" className="flex items-start gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5 group-hover:bg-[#c5a880] group-hover:text-[#202B39] transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] text-slate-400 uppercase font-mono tracking-wider font-bold">Email</span>
                    <span className="text-white text-xs font-semibold break-all hover:text-[#c5a880]">
                      capturesurvy@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-400 uppercase font-mono tracking-wider font-bold">Office Address</span>
                  <p className="text-slate-300 text-[10px] leading-normal mt-0.5 font-medium">
                    403/9 Aryambavu Kottopadam Rd,<br />
                    Ariyoor (PO), 678583, Palakkad
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[8px] text-slate-400 uppercase font-mono tracking-wider font-bold">Working Hours</span>
                  <p className="text-slate-300 text-[10px] leading-normal mt-0.5 font-medium">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-white/10" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] font-mono text-slate-400 font-semibold">
          <p>&copy; ${new Date().getFullYear()} Capture Survey. All rights reserved.</p>
          <p>Precision Land Surveyors &mdash; Palakkad, Kerala</p>
          <div className="flex items-center gap-1.5 text-[#c5a880] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
            <span>Active Support</span>
          </div>
        </div>
      </footer>

      {/* ══════════════════ QUOTE MODAL ══════════════════ */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            onClick={() => setQuoteModalOpen(false)}
            className="absolute inset-0 bg-[#202B39]/70 backdrop-blur-sm"
          />

          <div className="relative glass-premium w-full max-w-xl rounded-2xl border border-[#c5a880]/25 p-8 shadow-2xl animate-scale-up z-10">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold text-[#c5a880] uppercase tracking-widest block mb-1">
                Survey Quotation Request
              </span>
              <h3 className="text-2xl font-semibold text-white tracking-tight">Get a Free Estimate</h3>
              <p className="text-slate-400 text-xs mt-1">Provide your project details to receive a customized surveying proposal.</p>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Project Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kottopadam, Palakkad"
                    value={quoteForm.location}
                    onChange={(e) => setQuoteForm({ ...quoteForm, location: e.target.value })}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Survey Category</label>
                <select
                  value={quoteForm.surveyType}
                  onChange={(e) => setQuoteForm({ ...quoteForm, surveyType: e.target.value })}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="DGPS Survey">DGPS Survey</option>
                  <option value="Topographic Survey">Topographic Survey</option>
                  <option value="Plot Designing & Setout">Plot Designing &amp; Setout</option>
                  <option value="Contour Survey">Contour Survey</option>
                  <option value="Location Map Preparation">Location Map Preparation</option>
                  <option value="FMB Marking">FMB Marking</option>
                  <option value="Building Setout">Building Setout</option>
                  <option value="Road & Canal Survey">Road &amp; Canal Survey</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Project Details</label>
                <textarea
                  rows="3"
                  placeholder="Specify land area in cents/acres, purpose, and special instructions..."
                  value={quoteForm.details}
                  onChange={(e) => setQuoteForm({ ...quoteForm, details: e.target.value })}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] hover:from-[#c5a880] hover:to-[#edd9bd] text-[#202B39] font-bold py-3 rounded-xl text-sm transition-all shadow-lg"
              >
                {formSubmitted ? "Opening WhatsApp Chat..." : "Request Proposal via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
