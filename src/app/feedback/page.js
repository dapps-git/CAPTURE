"use client";

import React, { useState, useEffect } from "react";
import {
  Compass,
  Star,
  Quote,
  Send,
  ArrowLeft,
  Search,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Share2,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  X,
} from "lucide-react";

const SEED_REVIEWS = [
  {
    id: "seed-1",
    name: "Rajesh Kumar",
    location: "Palakkad",
    service: "DGPS Survey",
    rating: 5,
    comment:
      "Outstanding precision! Capture Survey completed our boundary demarcation with pinpoint accuracy. The team was professional and delivered the certified report on time. Highly recommended for anyone needing reliable land measurement.",
    date: "2025-04-12",
  },
  {
    id: "seed-2",
    name: "Sreelatha Menon",
    location: "Thrissur",
    service: "Contour Survey",
    rating: 5,
    comment:
      "Exceptional work on our site's contour mapping. The detailed elevation data they provided saved us significantly in earthwork planning. The team was knowledgeable and responded quickly to all our queries.",
    date: "2025-03-28",
  },
  {
    id: "seed-3",
    name: "Arun Nair",
    location: "Kozhikode",
    service: "Building Setout",
    rating: 5,
    comment:
      "We hired Capture Survey for our villa project setout. Their column grid marking and pile point accuracy was flawless. The construction proceeded without a single alignment issue — truly professional work.",
    date: "2025-02-15",
  },
  {
    id: "seed-4",
    name: "Divya Krishnan",
    location: "Ariyoor",
    service: "Plot Designing & Setout",
    rating: 5,
    comment:
      "Needed a precise plot subdivision for our family land. The team from Capture Survey handled everything smoothly — from the initial FMB verification to the final boundary stone placement. 5 stars without hesitation!",
    date: "2025-01-30",
  },
  {
    id: "seed-5",
    name: "Mohammed Shafeeq",
    location: "Malappuram",
    service: "Road, Bridge & Canal Survey",
    rating: 4,
    comment:
      "Capture Survey did a comprehensive road alignment survey for our panchayat project. Detailed cross-sections and profiles were delivered on schedule. The team was professional and equipment was top-notch.",
    date: "2024-12-20",
  },
  {
    id: "seed-6",
    name: "Anitha Varghese",
    location: "Ernakulam",
    service: "Location Map Preparation",
    rating: 5,
    comment:
      "Required a certified location map for our bank documentation. Capture Survey prepared an accurate, officially formatted sketch quickly. Saved us a lot of time with the bank approval process.",
    date: "2024-11-08",
  },
];

const SERVICE_OPTIONS = [
  "DGPS Survey",
  "Topographic Survey",
  "Plot Designing & Setout",
  "Contour Survey",
  "Location Map Preparation",
  "FMB Marking",
  "Building Setout",
  "Road, Bridge & Canal Survey",
];

function StarSelector({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110 active:scale-95"
          aria-label={`Rate ${s} star${s !== 1 ? "s" : ""}`}
        >
          <Star
            className={`w-7 h-7 transition-colors ${s <= (hovered || value)
              ? "fill-[#c5a880] text-[#c5a880]"
              : "text-slate-400"
              }`}
          />
        </button>
      ))}
      <span className="ml-2 text-sm text-slate-400 font-medium">
        {value === 0
          ? "Tap to rate"
          : ["", "Poor", "Fair", "Good", "Great", "Excellent"][value]}
      </span>
    </div>
  );
}

function ReviewCard({ review }) {
  const dateStr = new Date(review.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="bg-white border border-[#c5a880]/25 hover:border-[#c5a880]/55 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c5a880]/10 group">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating
              ? "fill-[#c5a880] text-[#c5a880]"
              : "text-slate-200"
              }`}
          />
        ))}
        <span className="ml-auto text-[10px] text-[#202B39]/40 font-mono">
          {dateStr}
        </span>
      </div>

      {/* Comment */}
      <div className="relative">
        <Quote className="w-5 h-5 text-[#c5a880]/25 absolute -top-1 -left-0.5" />
        <p className="text-[#202B39]/75 text-sm leading-relaxed pl-5 font-light">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      {/* Author footer */}
      <div className="border-t border-[#c5a880]/15 pt-4 mt-auto flex items-center justify-between gap-2">
        <div>
          <span className="block text-[#202B39] font-semibold text-sm">
            {review.name}
          </span>
          <span className="text-[#c5a880] text-[11px] font-mono">
            {review.service} &bull; {review.location}
          </span>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#8c6d4f] to-[#c5a880] flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md">
          {review.name.charAt(0)}
        </div>
      </div>
    </div>
  );
}

export default function FeedbackPage() {
  const [reviews, setReviews] = useState(SEED_REVIEWS);
  const [search, setSearch] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [filterService, setFilterService] = useState("All");
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    service: "DGPS Survey",
    rating: 0,
    comment: "",
  });

  // Load persisted reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("capture_reviews");
      if (stored) {
        const parsed = JSON.parse(stored);
        setReviews([...SEED_REVIEWS, ...parsed]);
      }
    } catch { }
  }, []);

  const avgRating =
    reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;

  const filteredReviews = reviews.filter((r) => {
    const matchSearch =
      search === "" ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.comment.toLowerCase().includes(search.toLowerCase()) ||
      r.service.toLowerCase().includes(search.toLowerCase()) ||
      r.location.toLowerCase().includes(search.toLowerCase());
    const matchRating = filterRating === 0 || r.rating === filterRating;
    const matchService =
      filterService === "All" || r.service === filterService;
    return matchSearch && matchRating && matchService;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.rating === 0) return alert("Please select a star rating.");

    const newReview = {
      ...form,
      id: `user-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    };

    // Save to localStorage
    try {
      const stored = localStorage.getItem("capture_reviews");
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem(
        "capture_reviews",
        JSON.stringify([...existing, newReview])
      );
    } catch { }

    setReviews((prev) => [newReview, ...prev]);
    setShowSuccess(true);
    setSubmitted(true);
    setForm({ name: "", location: "", service: "DGPS Survey", rating: 0, comment: "" });
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const handleWhatsAppShare = () => {
    const text = `Hello Capture Survey,\n\nI'd like to share my feedback:\n\n*Name:* ${form.name || "A client"}\n*Service:* ${form.service}\n*Rating:* ${"⭐".repeat(form.rating)}\n*Comment:* ${form.comment}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919633356603?text=${encoded}`, "_blank");
  };

  const ratingDist = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: reviews.filter((r) => r.rating === s).length,
  }));

  return (
    <div className="min-h-screen bg-[#FAF8F2] overflow-x-hidden">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#c5a880]/25">
        <div className="max-w-7xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#8c6d4f] to-[#c5a880] flex items-center justify-center shadow-md shadow-[#c5a880]/30">
              <Compass className="w-5 h-5 text-[#202B39] stroke-[2.5]" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight text-[#202B39] group-hover:text-[#c5a880] transition-colors">
                CAPTURE SURVEY
              </span>
              <span className="block text-[8px] text-[#c5a880] font-mono tracking-widest leading-none font-bold">
                PRECISION LAND MEASURING
              </span>
            </div>
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-[#8c6d4f] hover:text-[#c5a880] text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* ── Page Hero Banner ── */}


      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ── Left: Submit Form ── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white border border-[#c5a880]/30 rounded-2xl p-6 shadow-lg shadow-[#c5a880]/5">
              {/* Form header */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] block mb-1">
                  Share Your Experience
                </span>
                <h2 className="text-lg font-bold text-[#202B39] tracking-tight">
                  Write a Review
                </h2>
                <p className="text-[#202B39]/55 text-xs mt-1">
                  Your feedback helps others trust Capture Survey.
                </p>
              </div>

              {/* Success banner */}
              {showSuccess && (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 mb-5 text-sm font-semibold animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Thank you! Your review has been posted.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-mono text-[#8c6d4f] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ravi Menon"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[10px] font-mono text-[#8c6d4f] uppercase tracking-wider mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Palakkad, Kerala"
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[10px] font-mono text-[#8c6d4f] uppercase tracking-wider mb-1.5">
                    Service Used *
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors appearance-none"
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-[10px] font-mono text-[#8c6d4f] uppercase tracking-wider mb-2">
                    Your Rating *
                  </label>
                  <StarSelector
                    value={form.rating}
                    onChange={(v) => setForm({ ...form, rating: v })}
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-[10px] font-mono text-[#8c6d4f] uppercase tracking-wider mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your experience with Capture Survey..."
                    value={form.comment}
                    onChange={(e) =>
                      setForm({ ...form, comment: e.target.value })
                    }
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Actions */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8c6d4f] to-[#c5a880] hover:from-[#c5a880] hover:to-[#edd9bd] text-[#202B39] font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-[#c5a880]/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Post Review
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#1a9e4e] font-semibold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Share via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact mini-card */}
            <div className="mt-5 bg-white border border-[#c5a880]/30 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#202B39]/55 text-xs mb-3">
                Need a survey? Call us directly.
              </p>
              <a
                href="tel:+919633356603"
                className="flex items-center justify-center gap-2 text-[#8c6d4f] font-bold text-sm hover:text-[#c5a880] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 96333 56603
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: Reviews List ── */}
        <div className="lg:col-span-2">
          {/* Search & Filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8c6d4f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews by name, service, location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c6d4f] hover:text-[#202B39]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {/* Rating filter */}
            <div className="flex items-center gap-2">
              {[0, 5, 4, 3].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRating(r)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${filterRating === r
                    ? "bg-[#202B39] border-[#c5a880]/40 text-[#c5a880]"
                    : "bg-white border-[#c5a880]/25 text-[#8c6d4f] hover:border-[#c5a880]/50"
                    }`}
                >
                  {r === 0 ? (
                    "All"
                  ) : (
                    <>
                      {r}
                      <Star className="w-3 h-3 fill-current" />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Service filter chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", ...SERVICE_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => setFilterService(s)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${filterService === s
                  ? "bg-[#c5a880] border-[#c5a880] text-[#202B39]"
                  : "bg-white border-[#c5a880]/25 text-[#8c6d4f] hover:border-[#c5a880]/50"
                  }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-[#202B39]/50 text-xs font-mono">
              Showing {filteredReviews.length} of {reviews.length} reviews
            </p>
            {(search || filterRating > 0 || filterService !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setFilterRating(0);
                  setFilterService("All");
                }}
                className="text-[#c5a880] text-xs font-semibold hover:underline flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" /> Clear filters
              </button>
            )}
          </div>

          {/* Reviews grid */}
          {filteredReviews.length === 0 ? (
            <div className="text-center py-20 text-[#202B39]/40">
              <Star className="w-10 h-10 mx-auto mb-3 text-[#c5a880]/30" />
              <p className="font-semibold">No reviews match your search.</p>
              <p className="text-xs mt-1">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Full Site Footer ── */}
      <footer className="relative bg-white text-[#8c6d4f] border-t border-[#c5a880]/30 shadow-2xl">
        {/* Gold top divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#c5a880]/20 flex items-center justify-center shadow-lg">
                <Compass className="w-5 h-5 text-[#c5a880] stroke-[2]" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight text-[#8c6d4f]">
                  CAPTURE SURVEY
                </span>
                <span className="block text-[8px] text-[#8c6d4f] font-mono tracking-widest leading-none font-bold">
                  PRECISION LAND MEASURING
                </span>
              </div>
            </a>
            <p className="text-[#8c6d4f] text-xs leading-relaxed mb-4">
              Professional DGPS &amp; land surveying services across Kerala. Accurate, certified, and reliable mapping for every need.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { Icon: Globe, href: "#" },
                { Icon: Share2, href: "#" },
                { Icon: MessageCircle, href: "https://wa.me/919633356603" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#c5a880]/20 hover:bg-[#c5a880] hover:text-[#202B39] flex items-center justify-center text-[#8c6d4f] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#8c6d4f] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#c5a880] rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-[#8c6d4f]">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Contact Us", href: "/#contact" },
                { label: "Client Feedback", href: "/feedback" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-[#8c6d4f] text-xs transition-colors font-medium hover:text-[#c5a880]"
                  >
                    <ChevronRight className="w-3 h-3 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-[#8c6d4f] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#c5a880] rounded-full inline-block" />
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "DGPS Survey",
                "Topographic Survey",
                "Plot Designing & Setout",
                "Contour Survey",
                "FMB Marking",
                "Building Setout",
                "Location Map Preparation",
                "Road & Canal Survey",
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="/#services"
                    className="flex items-center gap-1.5 text-[#8c6d4f] text-xs transition-colors font-medium hover:text-[#c5a880]"
                  >
                    <ChevronRight className="w-3 h-3 transition-colors" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-xs font-bold text-[#8c6d4f] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#c5a880] rounded-full inline-block" />
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+919633356603" className="flex items-start gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#c5a880]/20 flex items-center justify-center text-[#8c6d4f] shrink-0 mt-0.5 group-hover:bg-[#c5a880] group-hover:text-[#202B39] transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] text-[#8c6d4f] uppercase font-mono tracking-wider font-bold">Primary Phone</span>
                    <span className="text-[#8c6d4f] font-bold text-xs">+91 96333 56603</span>
                    <span className="block text-[#8c6d4f] text-[10px]">+91 86064 01674</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:capturesurvy@gmail.com" className="flex items-start gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#c5a880]/20 flex items-center justify-center text-[#8c6d4f] shrink-0 mt-0.5 group-hover:bg-[#c5a880] group-hover:text-[#202B39] transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] text-[#8c6d4f] uppercase font-mono tracking-wider font-bold">Email</span>
                    <span className="text-[#8c6d4f] text-xs font-semibold break-all hover:text-[#c5a880]">capturesurvy@gmail.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#c5a880]/20 flex items-center justify-center text-[#8c6d4f] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[8px] text-[#8c6d4f] uppercase font-mono tracking-wider font-bold">Office Address</span>
                  <p className="text-[#8c6d4f] text-[10px] leading-normal mt-0.5 font-medium">
                    403/9 Aryambavu Kottopadam Rd,<br />
                    Ariyoor (PO), 678583, Palakkad
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#c5a880]/20 flex items-center justify-center text-[#8c6d4f] shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[8px] text-[#8c6d4f] uppercase font-mono tracking-wider font-bold">Working Hours</span>
                  <p className="text-[#8c6d4f] text-[10px] leading-normal mt-0.5 font-medium">
                    Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-[#c5a880]/15" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#8c6d4f] font-semibold">
          <p>&copy; {new Date().getFullYear()} Capture Survey. All rights reserved.</p>
          <p>Precision Land Surveyors &mdash; Palakkad, Kerala</p>
          <div className="flex items-center gap-1.5 text-[#c5a880] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
            <span>Active Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
