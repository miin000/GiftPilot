import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Icon = ({ name, size = 30 }) => {
  const paths = {
    gift: <><rect x="4" y="10" width="24" height="16" rx="2" /><path d="M16 10v16M3 16h26M16 10c-6 0-8-2-8-4s2-3 4-3c3 0 4 4 4 7Zm0 0c6 0 8-2 8-4s-2-3-4-3c-3 0-4 4-4 7Z" /></>,
    bolt: <path d="m18 2-12 15h9l-2 11 12-16h-9l2-10Z" />,
    users: <><circle cx="10" cy="10" r="4" /><circle cx="22" cy="11" r="3" /><path d="M2 27c0-5 3-8 8-8s8 3 8 8M18 20c5-1 8 2 8 7" /></>,
    palette: <path d="M16 3a13 13 0 0 0 0 26h2a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h5a8 8 0 0 0 8-8C29 5 23 3 16 3Z M8 12h.01M12 8h.01M20 8h.01M24 12h.01" />,
    file: <><path d="M7 2h14l5 5v21H7z" /><path d="M21 2v6h5M11 14h11M11 19h11M11 24h7" /></>,
    shield: <path d="M16 2 28 7v8c0 8-5 12-12 15C9 27 4 23 4 15V7l12-5Zm-5 14 3 3 7-7" />,
    calendar: <><rect x="3" y="5" width="26" height="24" rx="2" /><path d="M9 2v6M23 2v6M3 12h26M9 17h.01M16 17h.01M23 17h.01M9 23h.01M16 23h.01" /></>,
    scale: <><path d="M16 4v23M9 27h14M5 9h22M7 9l-5 9a5 5 0 0 0 10 0L7 9Zm18 0-5 9a5 5 0 0 0 10 0l-5-9Z" /></>,
    invoice: <><path d="M7 2h18v26H7zM11 8h10M11 13h10M11 18h10M11 23h6" /><path d="M4 6v20" /></>,
    mail: <><rect x="3" y="6" width="26" height="20" rx="2" /><path d="m4 8 12 10L28 8" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const benefits = [
  ['users', 'Employee recognition', 'Say thanks for a win, a milestone, or just a hard week. Same-day delivery, personal message, and a card that lets them pick what they actually want.'],
  ['gift', 'Client gifts', 'Skip the branded merch nobody keeps. Send a gift card with your logo and a personal note, and be the one they remember.'],
  ['bolt', 'Sales incentives & rewards', 'Run promos, spiffs, and channel incentives without warehouse logistics. Order in bulk, schedule delivery, track redemption.'],
  ['calendar', 'EOFY, Christmas & seasonal', 'Handle five recipients or five hundred from the same dashboard. Batch-send, schedule ahead, and stay under the $300 FBT minor benefit threshold.'],
]

const principles = [
  ['gift', '1. Recipient choice', 'Nobody gets a gift card they picked themselves. Instead of guessing whether your recipient drinks wine or wears a medium, let them choose from hundreds of retailers across fashion, tech, food, travel and home.'],
  ['bolt', '2. Instant delivery', 'Email or SMS in seconds. Schedule ahead for birthdays, work anniversaries, and end-of-year sends. No shipping, no lead times, no “did it arrive yet?”'],
  ['users', '3. Send one or one thousand', 'No minimums, no subscriptions. Send a single card, or upload a spreadsheet of recipients and deliver hundreds in one flow.'],
  ['palette', '4. Your brand, their inbox', 'Add your logo, pick a themed greeting card, write a personal message. The gift feels like it came from you, not from a platform.'],
  ['invoice', '5. Proper tax invoices', 'Every order generates a GST-compliant tax invoice. Pay by card, or apply for invoice terms if you send regularly.'],
  ['shield', '6. FBT-aware by design', 'We flag when your per-recipient spend approaches the $300 minor benefit threshold, so your finance team does not have to chase you for a spreadsheet.'],
]

const faqs = [
  ['Is there a minimum order?', 'No. Send one card or a thousand from the same account. No subscription, no monthly commitment.'],
  ['Can I add my company branding?', 'Yes. Add your logo, choose a card design and personalise the message your recipient sees.'],
  ['How are gift cards delivered?', 'By email or SMS, instantly or scheduled for the date and time you choose.'],
  ['Do you provide GST tax invoices?', 'Yes. Every order generates a downloadable GST-compliant invoice.'],
  ['Can I pay on invoice term?', 'Yes, eligible Australian businesses can apply for invoice terms.'],
  ['What about Fringe Benefits Tax?', 'GiftPilot helps you keep track of the $300 minor benefits threshold per recipient.'],
  ['Do the gift cards expire?', 'Most gift cards are valid for at least 36 months. Exact terms vary by brand and are shown before sending.'],
  ['Can I bulk upload recipients?', 'Yes. Upload a CSV or spreadsheet and send to hundreds of recipients in one simple flow.'],
]

function Logo() {
  return <div className="logo"><span className="logo-mark">✚</span><span>Gift<span className="pink">Pilot</span></span><small>for business</small></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <Logo />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a className="active" href="#hero">For<br />business</a>
            <a href="#how-it-works">How it works</a><a href="#brands">Brands</a><a href="#pricing">Pricing</a>
            <a href="#resources">Resources <span className="chevron">⌄</span></a>
            <button className="btn btn-outline">Login</button><button className="btn btn-pink">Get started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">FOR BUSINESS</p>
              <h1>Send gift cards your<br />team and clients<br />actually want.</h1>
              <p className="lead">Reward staff, thank clients, run incentives. Choose from hundreds of Australian brands, deliver by email or SMS in seconds, and skip the corporate gifting guesswork.</p>
              <div className="hero-actions"><button className="btn btn-pink">Get started</button><button className="btn btn-outline pink-outline">Talk to our team</button></div>
              <div className="hero-highlights"><span><b>ϟ</b> Instant delivery<small>Email or SMS</small></span><span><b>◉</b> Hundreds of brands<small>They&apos;ll love</small></span><span><b>▧</b> GST tax invoices<small>On every order</small></span></div>
            </div>
            <div className="hero-art">
              <div className="phone"><div className="notch" /><div className="phone-top">9:41 <span>◔ ◒</span></div><div className="steps">① Choose　 ② Personalise　 <b>③ Send</b></div><h3>You&apos;ve received<br />a gift card!</h3><div className="gift-card"><strong>JB HI-FI</strong><small>GIFT CARD</small></div><b className="amount">$100.00</b><small>from Acme Pty Ltd</small><div className="thank-you">Thanks for all your hard work!</div><div className="confetti">•　·　•<br />　·　•　·</div></div>
              <div className="mail-bubble"><Icon name="mail" size={35} /></div><div className="delivery"><b>ϟ</b><span>Delivered in<br /><strong>seconds</strong></span></div>
              <svg className="dotted-line" viewBox="0 0 300 220"><path d="M0 130c100 30 165 0 165-65" /></svg>
            </div>
          </div>
        </section>

        <section className="brands" id="brands"><p className="eyebrow">HUNDREDS OF BRANDS YOUR RECIPIENTS LOVE</p><div className="brand-row"><span>‹</span><b className="coles">coles</b><b className="jb">JB HI-FI</b><b className="myer">MYER</b><b className="rebel">rebel</b><b>THE ICONIC</b><b className="hoyts">HOYTS</b><span>›</span></div></section>
        <section className="platform container"><h2>One platform. Every gifting moment</h2><div className="benefit-grid">{benefits.map(([icon, title, text]) => <article className="card benefit" key={title}><div className="icon pink-icon"><Icon name={icon} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="how container" id="how-it-works"><h2>Built for the way Australian businesses actually gift</h2><div className="principle-grid">{principles.map(([icon, title, text]) => <article className={`card principle ${title.startsWith('6.') ? 'highlight-card' : ''}`} key={title}><div className="icon"><Icon name={icon} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <h2 className="process-title">From brief to inbox in under five minutes</h2><div className="process-grid">{[['01','Choose your gift','Pick a single retailer or a multi-brand card that lets your recipient choose. Set the amount from $5 to $500.'],['02','Personalise & upload','Add your logo, message and greeting theme. Enter one recipient, or upload a spreadsheet for hundreds.'],['03','Send now or schedule','Deliver instantly or schedule to the minute. Track deliveries and redemption from your dashboard.']].map(([num,title,text], i) => <article className="card process" key={num}><span className="number">{num}</span><div className={`process-visual visual-${i}`}><span>{i === 0 ? 'JB HI-FI　 MYER' : i === 1 ? '▱　▣' : '▯　✉'}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="tax-banner"><div className="tax-item"><div className="round-icon"><Icon name="scale" /></div><div><h3>FBT-friendly by design</h3><p>Gift cards under $300 per recipient, given infrequently, generally qualify as a minor benefit exempt from Fringe Benefits Tax. We surface the threshold at checkout so your business can gift compliantly without a spreadsheet.</p></div></div><div className="tax-item"><div className="round-icon"><Icon name="invoice" /></div><div><h3>GST invoicing & payment</h3><p>Tax invoices on every order — automatic, downloadable, ready for your bookkeeper. Pay by credit card, or apply for invoice terms if you send regularly.</p></div></div><small>General information only — confirm with your tax advisor.</small></div>
        </section>

        <section className="social-proof container"><h2>Trusted by Australian teams</h2><div className="testimonial-grid">{[['“We sent 240 cards for our EOFY thank-you campaign in a single afternoon. Our office manager used to spend two weeks on this.”','Sarah T','People & Culture Manager, Sydney'],['“We ran a Q3 sprint, launched Monday, first cards were in reps’ hands by lunch. The team was chasing target the same afternoon.”','Mark R','National Sales Manager, Melbourne'],['“The FBT threshold flag alone has saved our finance team hours every quarter.”','Priya K','Finance Manager, Brisbane']].map(([quote,name,role]) => <article className="card testimonial" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="person"><div className="avatar">{name[0]}</div><span><b>{name}</b><small>{role}</small></span></div></article>)}</div></section>

        <section className="faq container" id="resources"><h2>Business gifting, answered</h2><div className="faq-grid">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={question} onClick={() => setOpenFaq(openFaq === i ? null : i)}><div className="faq-question"><b>{question}</b><span>⌄</span></div>{openFaq === i && <p>{answer}</p>}</div>)}</div></section>

        <section className="cta"><div className="container cta-inner"><div className="present">🎁</div><div><h2>Ready to make gifting the easy part?</h2><p>Set up a business account in minutes.<br />No subscription, no monthly minimums, no lock-in.</p></div><div className="cta-actions"><button className="btn white-btn">Create business account</button><button className="btn transparent-btn">Book a 15-minute demo</button></div></div></section>
      </main>
      <footer><div className="container"><Logo /><span>© 2024 GiftPilot. Business gifting made easy.</span></div></footer>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
