import React, { useState } from "react";
import {
  ShoppingBag,
  Package,
  Store,
  Scissors,
  PenTool,
  Search,
  TrendingUp,
  Camera,
  Truck,
  MessageCircle,
  Mail,
  Menu,
  X,
} from "lucide-react";

function StitchDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <svg width="100%" height="10" className="max-w-6xl">
        <line
          x1="0"
          y1="5"
          x2="100%"
          y2="5"
          stroke="#4F9DE0"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="font-mono text-[11px] tracking-widest uppercase text-[#4F9DE0] border border-[#4F9DE0]/40 px-2 py-1 rounded-sm">
      {children}
    </span>
  );
}

function PlatformCard({ icon: Icon, name, role, points }) {
  return (
    <div className="relative bg-[#101B30] border border-[#2A3B57] rounded-lg p-6 pt-8 shadow-lg hover:border-[#4F9DE0]/50 transition-colors">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0B1424] border border-[#2A3B57]" />
      <div className="w-11 h-11 rounded-md bg-[#1B2E4D] flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#4F9DE0]" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-xl text-[#EDF2F9] tracking-wide">{name}</h3>
      <p className="font-mono text-[11px] uppercase tracking-widest text-[#4F9DE0] mt-1 mb-3">
        {role}
      </p>
      <ul className="space-y-1.5">
        {points.map((p, i) => (
          <li key={i} className="font-body text-sm text-[#9FB0C7] leading-relaxed flex gap-2">
            <span className="text-[#4F9DE0] mt-1.5">–</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NajafPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Platforms", href: "#platforms" },
    { label: "Expertise", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1424] font-body text-[#EDF2F9]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-[#0B1424]/95 backdrop-blur border-b border-[#2A3B57]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-lg tracking-widest uppercase text-[#EDF2F9]">
            Najaf Ali
          </span>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-[#9FB0C7] hover:text-[#4F9DE0] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block font-mono text-xs uppercase tracking-widest bg-[#2E5C9A] text-[#EDF2F9] px-4 py-2 rounded-sm hover:bg-[#4F9DE0] hover:text-[#0B1424] transition-colors"
          >
            Get in touch
          </a>
          <button
            className="md:hidden text-[#EDF2F9]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-[#9FB0C7]"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-20 md:pb-20 relative">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Tag>Fashion &amp; Menswear E-commerce</Tag>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-[#EDF2F9] mt-5">
              Najaf Ali
            </h1>
            <p className="font-display text-xl md:text-2xl text-[#4F9DE0] mt-3 tracking-wide">
              Independent E-commerce Seller — Etsy · Printify · Amazon
            </p>
            <p className="font-body text-base text-[#9FB0C7] mt-5 max-w-xl leading-relaxed">
              I design, list, and fulfill men's shirts and fashion apparel across
              Etsy, Amazon, and print-on-demand with Printify — handling everything
              from product research and listing SEO to order fulfillment and
              customer support.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#platforms"
                className="font-mono text-xs uppercase tracking-widest bg-[#2E5C9A] text-[#EDF2F9] px-5 py-3 rounded-sm hover:bg-[#4F9DE0] hover:text-[#0B1424] transition-colors"
              >
                View my platforms
              </a>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-widest border border-[#4F9DE0]/50 text-[#4F9DE0] px-5 py-3 rounded-sm hover:bg-[#4F9DE0] hover:text-[#0B1424] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 md:w-80">
              <div className="absolute -inset-3 border border-[#4F9DE0]/30 rounded-2xl" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden border border-[#2A3B57] shadow-2xl bg-[#101B30]">
                <img
                  src="/najafali.jpeg"
                  alt="Portrait of Najaf Ali"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#101B30] border border-[#2A3B57] rounded-lg px-4 py-2 shadow-lg">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#4F9DE0]">
                  Seller profile
                </p>
                <p className="font-display text-sm text-[#EDF2F9]">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StitchDivider />

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          <div>
            <Tag>About</Tag>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-[#EDF2F9] tracking-wide mb-4">
              Built for online retail, one listing at a time.
            </h2>
            <p className="font-body text-[#9FB0C7] leading-relaxed">
              I run a fashion-focused e-commerce operation centered on men's shirts
              and everyday apparel. My work spans the full seller lifecycle:
              sourcing and designing products with Printify's print-on-demand
              network, publishing and optimizing listings on Etsy and Amazon, and
              managing orders, shipping, and customer communication end to end.
              This portfolio summarizes that experience for business and payment
              verification purposes.
            </p>
            <p className="font-body text-[#9FB0C7] leading-relaxed mt-4">
              I'm early in scaling this business and actively growing my catalog,
              store presence, and fulfillment process across all three platforms.
            </p>
          </div>
        </div>
      </section>

      <StitchDivider />

      {/* PLATFORMS */}
      <section id="platforms" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <Tag>Where I sell</Tag>
        <h2 className="font-display text-3xl md:text-4xl text-[#EDF2F9] tracking-wide mt-4 mb-8">
          Platforms &amp; marketplaces
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PlatformCard
            icon={Store}
            name="Etsy"
            role="Storefront & listings"
            points={[
              "Manage a storefront for men's shirts and fashion goods",
              "Write and optimize listing titles, tags, and descriptions for Etsy search",
              "Handle customer messages, custom requests, and reviews",
            ]}
          />
          <PlatformCard
            icon={Package}
            name="Printify"
            role="Print-on-demand production"
            points={[
              "Design shirt artwork and mockups for print-on-demand",
              "Connect products to Etsy and other sales channels",
              "Coordinate print quality, variants, and shipping profiles",
            ]}
          />
          <PlatformCard
            icon={ShoppingBag}
            name="Amazon"
            role="Marketplace selling"
            points={[
              "List men's fashion products on Amazon's marketplace",
              "Work with product titles, bullet points, and images for Amazon SEO",
              "Track orders and monitor account health metrics",
            ]}
          />
        </div>
      </section>

      <StitchDivider />

      {/* EXPERTISE */}
      <section id="expertise" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <Tag>Skill set</Tag>
        <h2 className="font-display text-3xl md:text-4xl text-[#EDF2F9] tracking-wide mt-4 mb-8">
          Areas of expertise
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { icon: Search, label: "Etsy & Amazon SEO" },
            { icon: PenTool, label: "Product & mockup design" },
            { icon: Package, label: "Print-on-demand setup" },
            { icon: TrendingUp, label: "Listing optimization" },
            { icon: Camera, label: "Product photography" },
            { icon: Truck, label: "Order fulfillment" },
            { icon: MessageCircle, label: "Customer service" },
            { icon: Scissors, label: "Apparel product research" },
            { icon: ShoppingBag, label: "Marketplace account management" },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#101B30] border border-[#2A3B57] rounded-md px-4 py-3"
            >
              <s.icon className="w-4 h-4 text-[#4F9DE0] flex-shrink-0" strokeWidth={1.75} />
              <span className="font-body text-sm text-[#EDF2F9]">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <StitchDivider />

      {/* FEATURED WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <Tag>Catalog</Tag>
        <h2 className="font-display text-3xl md:text-4xl text-[#EDF2F9] tracking-wide mt-4 mb-2">
          Featured product lines
        </h2>
        <p className="font-body text-sm text-[#6C93BF] mb-8">
          Sample layout — swap these placeholders for real product photos and titles.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
           <div className="relative">
            <img src="/Gemini_Generated_Image_v30rnpv30rnpv30r.png" alt="Classic Oxford Shirt" className="w-full h-auto object-cover" />
            <h2 className="font-display text-base text-[#EDF2F9] tracking-wide mt-2">Classic Oxford Shirt</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#6C93BF] mt-1">Men's Casual</p>
          </div>
          <div className="relative">
            <img src="/FRL983.webp" alt="Graphic Print Tee" className="w-full h-auto object-cover" />
            <h2 className="font-display text-base text-[#EDF2F9] tracking-wide mt-2">Graphic Print Tee</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#6C93BF] mt-1">Print-on-Demand</p>
          </div>
          <div className="relative">
            <img src="/new-lin168-_3.webp" alt="Linen Summer Shirt" className="w-full h-auto object-cover" />
            <h2 className="font-display text-base text-[#EDF2F9] tracking-wide mt-2">Linen Summer Shirt</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#6C93BF] mt-1">Men's Casual</p>
          </div>
          <div className="relative">
            <img src="/customer.jpg" alt="Custom Design Tee" className="w-full h-auto object-cover" />
            <h2 className="font-display text-base text-[#EDF2F9] tracking-wide mt-2">Custom Design Tee</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#6C93BF] mt-1">Print-on-Demand</p>
          </div>
        </div>
      </section>

      <StitchDivider />

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <Tag>Workflow</Tag>
        <h2 className="font-display text-3xl md:text-4xl text-[#EDF2F9] tracking-wide mt-4 mb-10">
          From design to doorstep
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { n: "01", t: "Design", d: "Create shirt artwork and mockups" },
            { n: "02", t: "Produce", d: "Set up print-on-demand via Printify" },
            { n: "03", t: "List", d: "Publish optimized listings on Etsy & Amazon" },
            { n: "04", t: "Fulfill", d: "Process orders and coordinate shipping" },
            { n: "05", t: "Support", d: "Handle customer messages and reviews" },
          ].map((step, i) => (
            <div key={i} className="relative">
              <span className="font-mono text-xs text-[#4F9DE0]">{step.n}</span>
              <h3 className="font-display text-lg text-[#EDF2F9] tracking-wide mt-1">
                {step.t}
              </h3>
              <p className="font-body text-sm text-[#9FB0C7] mt-1 leading-relaxed">
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <StitchDivider />

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="bg-[#101B30] border border-[#2A3B57] rounded-xl px-8 py-12 md:px-14 md:py-16 text-center">
          <Tag>Let's connect</Tag>
          <h2 className="font-display text-3xl md:text-5xl text-[#EDF2F9] tracking-wide mt-5">
            Get in touch
          </h2>
          <p className="font-body text-[#9FB0C7] mt-4 max-w-lg mx-auto leading-relaxed">
            Reach out for business inquiries, collaborations, or verification
            purposes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#4F9DE0] text-[#0B1424] px-5 py-3 rounded-sm hover:bg-[#EDF2F9] transition-colors"
            >
              <Mail className="w-4 h-4" /> Email me
            </a>
            <a
              href="#s"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-[#4F9DE0]/40 text-[#EDF2F9] px-5 py-3 rounded-sm hover:bg-[#4F9DE0]/10 transition-colors"
            >
              <Store className="w-4 h-4" /> Etsy store
            </a>
            <a
              href="#s"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-[#4F9DE0]/40 text-[#EDF2F9] px-5 py-3 rounded-sm hover:bg-[#4F9DE0]/10 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" /> Amazon storefront
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 font-mono text-[11px] uppercase tracking-widest text-[#6C93BF]">
        Najaf Ali — E-commerce Seller Portfolio
      </footer>
    </div>
  );
}
