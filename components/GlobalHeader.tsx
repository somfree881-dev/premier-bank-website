"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, LogIn, MapPin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = { darkMode: boolean; onToggleDark: () => void };

const navigation = [
  { label: "Personal Banking", href: "/#accounts", eyebrow: "Personal Banking", title: "Banking for everyday confidence.", description: "Flexible accounts, cards, financing and digital banking designed around your goals.", image: "/images/Premier-Wallet.png", items: ["Current Accounts", "Savings Accounts", "Salary Account", "Diaspora Banking Account", "Premier Mastercard", "Premier Wallet"] },
  { label: "Business Banking", href: "/#financing", eyebrow: "Business Banking", title: "Smarter solutions for growing businesses.", description: "Everyday banking, financing and payment tools that help your business operate with confidence.", image: "/images/businessbankingbanner.png", items: ["Business Current Account", "Corporate Current Account", "Business Financing", "Payroll Processing", "Premier POS", "Payment Gateway"] },
  { label: "International Banking", href: "/#banking-services", eyebrow: "International Banking", title: "Connect your finances to the world.", description: "Secure international banking solutions for individuals and businesses wherever opportunity takes you.", image: "/images/International Bankingbanner.png", items: ["SWIFT", "International Transfers", "Diaspora Banking", "Foreign Exchange", "International Payments"] },
  { label: "Services", href: "/#banking-services", eyebrow: "Our Services", title: "Everything you need to bank smarter.", description: "Modern digital, payment and everyday banking services in one place.", image: "/images/servicesbanner.png", items: ["Premier Wallet", "Online Banking", "Premier POS", "Payment Gateway", "Payroll", "ATM Banking", "Agency Banking", "SWIFT"] },
  { label: "About Us", href: "/#about", eyebrow: "About Premier Bank", title: "Building trust. Creating possibilities.", description: "Learn about the people, values and purpose behind Premier Bank.", image: "/images/logo.png", items: ["About Us", "Our Vision & Mission", "Core Values", "Leadership", "Careers", "CSR"] },
];

export function GlobalHeader({ darkMode, onToggleDark }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);
  const openNavigation = (label: string) => {
    setActiveMega((current) => current === label ? null : label);
  };

  useEffect(() => {
    const aboutVisual = new window.Image();
    aboutVisual.src = "/images/logo.png";
  }, []);

  return <header className="global-header" onMouseLeave={() => setActiveMega(null)}>
    <div className="global-container global-header-inner">
      <a className="global-logo" href="/" aria-label="Premier Bank home" onClick={closeMenu}>
        <Image src={darkMode ? "/images/darkmodelogo.png" : "/images/logo.png"} alt="Premier Bank" width={150} height={68} priority />
      </a>
      <nav className={menuOpen ? "global-nav is-open" : "global-nav"} aria-label="Primary navigation">
        {navigation.map((item) => <button key={item.label} type="button" className="global-nav-mega-trigger" aria-expanded={activeMega === item.label} onMouseEnter={() => { if (window.innerWidth > 820) setActiveMega(item.label); }} onClick={() => openNavigation(item.label)}>{item.label}<ChevronDown size={14} /></button>)}
        <a className="global-branch-link" href="/branch-locator" onClick={closeMenu}><MapPin size={15} />Branch Locator</a>
        <a className="global-mobile-online" href="https://online.premierbank.so/omni_corporate_web_portal/#/omni" onClick={closeMenu}><LogIn size={16} />Online Banking<ChevronDown size={14} /></a>
      </nav>
      <div className="global-header-actions">
        <button className="global-theme-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
        <a className="global-online-button" href="https://online.premierbank.so/omni_corporate_web_portal/#/omni"><LogIn size={15} />Online Banking<ChevronDown size={14} /></a>
        <button className="global-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    {activeMega && <>
      <button type="button" className="global-mega-backdrop" aria-label="Close menu" onMouseEnter={() => setActiveMega(null)} onClick={() => setActiveMega(null)} />
      {navigation.filter((item) => item.label === activeMega).map((item) => <section className="global-mega-menu" key={item.label}><div className="global-container global-mega-layout"><div className="global-mega-intro"><p>{item.eyebrow}</p><h2>{item.title}</h2><span>{item.description}</span><a href={item.href} onClick={() => setActiveMega(null)}>Explore {item.label}<ArrowRight size={16} /></a></div><div className="global-mega-links">{item.items.map((entry, index) => <a href={item.href} key={entry} onClick={() => setActiveMega(null)}><b>{String(index + 1).padStart(2, "0")}</b>{entry}<ArrowRight size={14} /></a>)}</div><div className={`global-mega-visual global-mega-visual-${item.label.toLowerCase().replaceAll(" ", "-")}`}><img src={item.image} alt="" width={330} height={245} loading="eager" decoding="async" /></div></div></section>)}
    </>}
  </header>;
}
