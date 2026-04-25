export default function Home() {
  return (
    <main>

      {/* ── CONTACT SECTION ── */}
      <section className="contact-section container">

        {/* Left: two images side by side */}
        <div className="contact-images">
          <div className="contact-img-box w-full h-full">
            <img className="contact-img-light w-full h-full" src="/side-image.png" alt="side-image" />
          </div>
        </div>

        {/* Right: contact form */}
        <div className="contact-form">
          <p className="contact-label">Kontakt</p>
          <h1 className="contact-heading">Headline 1</h1>
          <p className="contact-sub">Haben Sie eine Frage oder ein Projekt im Sinn?</p>
          <p className="contact-sub-last">Senden Sie uns eine Nachricht, und wir werden uns in Kürze bei Ihnen melden.</p>

          {/* Row 1: Anrede + Name */}
          <div className="form-row">
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Anrede</label>
                <select className="form-select">
                  <option>Bitte wählen</option>
                  <option>Herr</option>
                  <option>Frau</option>
                  <option>Divers</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input type="text" placeholder="Bitte Namen eingeben" className="form-input" />
              </div>
            </div>
          </div>

          {/* Row 2: Position + Unternehmen on left, Ihre Nachricht textarea on right */}
          <div className="form-row">
            <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="form-field">
                <label className="form-label">Position</label>
                <input type="text" placeholder="Bitte Position eingeben" className="form-input" />
              </div>
              <div className="form-field">
                <label className="form-label">Unternehmen</label>
                <input type="text" placeholder="Bitte Unternehmen eingeben" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-field-textarea">
                <label className="form-label">Ihre Nachricht <span className="char-count">0/100</span></label>
                <textarea placeholder="Bitte Ihre Nachricht eingeben" className="form-textarea" />
              </div>
            </div>
          </div>

          {/* Separator */}
          <p className="contact-separator">
            Hinterlassen Sie Ihre Kontaktdaten – wir melden uns zeitnah bei Ihnen.
          </p>

          {/* Row 3: E-Mail + Telefonnummer */}
          <div className="form-row" style={{ marginBottom: "16px" }}>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">E-Mail</label>
                <input type="email" placeholder="Bitte E-Mail eingeben" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Telefonnummer</label>
                <input type="tel" placeholder="Bitte Telefonnummer eingeben" className="form-input" />
              </div>
            </div>
          </div>

          {/* Checkbox + Captcha row */}
          <div className="checkbox-captcha-row">
            <label className="consent-label">
              <input type="checkbox" className="consent-checkbox" />
              <span>
                Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
              </span>
            </label>
            {/* Captcha placeholder */}
            <div className="captcha-box">
              <input type="checkbox" />
              <span>Ich bin ein Mensch</span>
              <div style={{ marginLeft: "8px", textAlign: "center" }}>
                <div className="captcha-icon"></div>
                <p className="captcha-text">reCAPTCHA</p>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn-submit">
              Anfrage senden →
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="trust-bar">
        <div className="trust-bar-inner container">
          {[
            { code: "de", label: "100% Made", bold: " In Germany" },
            { code: "de", label: "Cybersecurity", bold: " from Germany" },
            { code: "de", label: "Research & Development", bold: " in Germany" },
            { code: "eu", label: "100% EU conformity", bold: "" },
          ].map((item, i) => (
            <div key={i} className="trust-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/40x30/${item.code}.png`}
                width={40}
                height={30}
                alt={item.code === "eu" ? "EU flag" : "German flag"}
                className="trust-flag"
              />
              <span>{item.label}<strong>{item.bold}</strong></span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="cta-section">
        <div className="cta-inner container">

          {/* Left text */}
          <div className="cta-left">
            <h2 className="cta-heading">
              Try <strong style={{ color: "#1a1aff" }}>OSIGN®</strong> free and without obligation – for 60 days <span style={{ fontSize: "24px" }}>↗</span>
            </h2>
            <div className="cta-bottom-bar">
              <p className="cta-price-text">
                <strong>And after that? Only €20 net per month,</strong> per user for non-profits, NGOs and KMPs (&lt; 3 years)
              </p>
              <button className="btn-outline">
                Book free consultation now →
              </button>
            </div>
          </div>

          {/* Right box */}
          <div className="cta-right">
            <p className="cta-right-text">
              You can test the <strong>full range of OSIGN®</strong> features free of charge and without obligation for <strong>60 days</strong>. During this time, you will already benefit from <strong>all advantages of OSIGN®</strong>.
            </p>
            <button className="btn-dark">
              Start your 60-day trial now →
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER INTRO ── */}
      <section className="footer-intro">
        <div className="container">
          <p className="footer-intro-title">Who is behind OSIGN?</p>
          <p className="footer-intro-sub">Find out more about OTOKO and our mission</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">

          {/* Columns */}
          <div className="footer-columns">

            {/* Solutions */}
            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-col-list">
                <li>Einfache elektronische Signatur (EES)</li>
                <li>Fortgeschrittene elektronische Signatur (FES)</li>
                <li>Qualifizierte elektronische Signatur (QES)</li>
                <li>Maximale Souveränität: MYOK / BYOK-Anbindung</li>
              </ul>
            </div>

            {/* Comparisons */}
            <div className="footer-col">
              <h4 className="footer-col-title">Comparisons</h4>
              <ul className="footer-col-list">
                <li>OSIGN® vs Paperless.io</li>
                <li>OSIGN® vs yousign.com</li>
                <li>OSIGN® vs d-trust.net</li>
                <li>OSIGN® vs d-velop.de</li>
                <li>OSIGN® vs getinsign.de</li>
                <li>OSIGN® vs box.com</li>
                <li>OSIGN® vs box.com</li>
                <li>OSIGN® vs box.com</li>
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-col">
              <h4 className="footer-col-title">Industries</h4>
              <ul className="footer-col-list">
                <li>Personalwesen</li>
                <li>Rechnungswesen</li>
                <li>Einkauf und Sourcing</li>
                <li>Vertrieb</li>
                <li>Recht</li>
                <li>Finanzdienstleistung</li>
                <li>Versicherungen</li>
                <li>Baugewerbe</li>
                <li>Handwerker</li>
                <li>Gesundheitswesen</li>
                <li>Fertigung</li>
                <li>IT</li>
              </ul>
            </div>

            {/* Inventories + Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Inventories</h4>
              <ul className="footer-col-list">
                <li>ERP</li>
                <li>CRM</li>
                <li>Finance</li>
                <li>HR</li>
                <li>Procurement</li>
                <li>Law</li>
                <li>Handwerk</li>
              </ul>

              <div className="footer-contact">
                <h4 className="footer-col-title">Contact</h4>
                <div className="footer-social-links">
                  <a href="#" className="social-icon social-icon-x">𝕏</a>
                  <a href="#" className="social-icon social-icon-linkedin">in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">2026 OSIGN® a brand of OTOKO® – All rights reserved.</p>
            <div className="footer-links">
              {["Terms and Conditions", "Data protection", "Imprint"].map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
