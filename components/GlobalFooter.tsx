import Image from "next/image";

const socials = [
  ["Facebook", "https://www.facebook.com/premierbankso/", <path key="p" d="M14 8.2V6.3c0-.9.6-1.1 1-1.1h2.5V1.1L14.1 1C10.8 1 9 3 9 6.1v2.1H6v4.3h3V23h5v-10.5h3.3l.5-4.3H14Z" />],
  ["Instagram", "https://www.instagram.com/premierbankso/", <><rect key="r" x="3" y="3" width="18" height="18" rx="5" /><circle key="c1" cx="12" cy="12" r="4" /><circle key="c2" cx="17.5" cy="6.5" r="1" /></>],
  ["LinkedIn", "https://www.linkedin.com/company/premier-bank-so", <path key="p" d="M5.2 8.4H1.4V22h3.8V8.4ZM3.3 2A2.2 2.2 0 1 0 3.3 6.4 2.2 2.2 0 0 0 3.3 2ZM22.6 13.7c0-4.1-2.2-6-5.1-6-2.4 0-3.4 1.3-4 2.2V8.4H9.7V22h3.8v-6.7c0-1.8.3-3.5 2.5-3.5 2.2 0 2.2 2 2.2 3.6V22H22v-7.3Z" />],
  ["X", "https://twitter.com/premierbankSO", <path key="p" d="M18.9 2H22l-6.8 7.7L23.2 22h-6.3L12 15.7 6.6 22H3.5l7.3-8.3L3.1 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L8.6 3.9H6.8L17.8 20Z" />],
  ["YouTube", "https://www.youtube.com/channel/UCw3yoOilntIYZrqKR1uisKg", <path key="p" d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 4.8 12 4.8 12 4.8s-7.2 0-8.8.4C2.3 5.4 1.6 6.1 1.4 7 .9 8.6.9 12 .9 12s0 3.4.5 5c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5ZM9.7 15.8V8.2l6.4 3.8-6.4 3.8Z" />],
] as const;

export function GlobalFooter() {
  return <footer className="global-footer">
    <div className="global-footer-top"><div className="global-container global-footer-grid">
      <div className="global-footer-brand"><Image src="/images/darkmodelogo.png" alt="Premier Bank" width={185} height={85} /><p>Your trusted partner for simple, secure and modern banking solutions.</p><div className="global-socials">{socials.map(([label, href, icon]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg></a>)}</div></div>
      <div className="global-footer-column"><h3>Banking</h3><a href="/#accounts">Current Accounts</a><a href="/#accounts">Savings Accounts</a><a href="/#accounts">Business Accounts</a><a href="/#banking-services">Money Transfer</a><a href="/#premier-wallet">Mobile Banking</a></div>
      <div className="global-footer-column"><h3>About Us</h3><a href="/#about">About Us</a><a href="/#about">Core Values</a><a href="/#about">CSR</a><a href="/#about">Jobs &amp; Careers</a><a href="/#about">Anti-Money Laundering Policy</a></div>
      <div className="global-footer-column global-footer-contact"><h3>Contact Us</h3><p><b>Our Phone Number</b><a href="tel:+252617771000">+252 61 7771000</a><a href="tel:+252633800017">+252 63 3800017</a></p><p><b>Our Email</b><a href="mailto:info@premierbank.so">info@premierbank.so</a></p><p><b>Mogadishu HQ Branch</b><span>KM4, Maka Al Mukarama Street, Wabari District.</span></p><p><b>Hargeisa HQ Branch</b><span>Durdur Business Center, Road No.1, 26 Jun District.</span></p></div>
    </div></div>
    <div className="global-footer-bottom"><div className="global-container global-footer-bottom-inner"><span>&copy; 2026 Premier Bank. All rights reserved.</span><div><a href="/#premier-wallet">Download App</a><a href="/#contact">Contact Us</a></div><p>Crafted with care <b aria-label="love">&hearts;</b> by Zakaria Hassan</p></div></div>
  </footer>;
}
