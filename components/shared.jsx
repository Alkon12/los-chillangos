// Shared UI components
const { useState, useEffect, useRef, useMemo } = React;

const useI18n = () => {
  const lang = window.__lang || 'en';
  return window.I18N[lang];
};

// PNG wordmark — logo-3 (navy outlines) for light mode, logo-1 (cream-on-dark) for dark mode
function Logo({ themeMode = 'light', themeStyle = 'color', height = 40, forceDark = false }) {
  const isDark = forceDark || themeMode === 'dark';
  const src = isDark ? 'assets/logo-1.png' : 'assets/logo-3.png';
  return (
    <img
      className="logo-img"
      data-logo-light={!isDark ? 'true' : undefined}
      data-logo-dark={isDark ? 'true' : undefined}
      src={src}
      alt="Los Chillangos"
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}

function Nav({ lang, setLang, route, navigate, themeMode, themeStyle }) {
  const t = window.I18N[lang];
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="logo" onClick={() => navigate('home')} style={{cursor:'pointer'}}>
          {/* Render both: CSS shows the right one (light over dark hero, normal otherwise) */}
          <img className="logo-img logo-default" src={themeMode === 'dark' ? 'assets/logo-1.png' : 'assets/logo-3.png'} alt="Los Chillangos" style={{height:40, width:'auto', display:'block'}} />
          <img className="logo-img logo-over-hero" src="assets/logo-1.png" alt="Los Chillangos" style={{height:40, width:'auto', display:'none'}} />
        </a>
        <div className="nav-links">
          <a onClick={() => navigate('home', 'tours')} style={{cursor:'pointer'}}>{t.nav.tours}</a>
          <a onClick={() => navigate('home', 'about')} style={{cursor:'pointer'}}>{t.nav.about}</a>
          <a onClick={() => navigate('home', 'services')} style={{cursor:'pointer'}}>{t.nav.services}</a>
          <a onClick={() => navigate('home', 'faq')} style={{cursor:'pointer'}}>FAQ</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang==='en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang==='es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('booking')}>{t.nav.book}</button>
        </div>
      </div>
    </nav>
  );
}

function TourCard({ tour, lang, navigate }) {
  const title = lang === 'es' ? tour.titleES : tour.titleEN;
  const desc = lang === 'es' ? tour.descES : tour.descEN;
  const tag = lang === 'es' ? tour.tagES : tour.tagEN;
  const t = window.I18N[lang];
  return (
    <a className="tour-card" onClick={() => navigate('detail', tour.id)} style={{cursor:'pointer'}}>
      <div className={`tour-card-img placeholder ${tour.photoTone || ''}`} data-label={tour.photo}>
        {tag && (
          <span className={`tour-card-tag ${tour.tagColor === 'terra' ? 'terra' : ''}`}>{tag}</span>
        )}
      </div>
      <div className="tour-card-meta">
        <span>{tour.duration}</span>
        <span>{tour.distance}</span>
      </div>
      <h3 className="tour-card-title">{title}</h3>
      <p className="tour-card-desc">{desc}</p>
      <div className="tour-card-foot">
        <span className="tour-card-price">
          ${tour.price}<small>USD {t.common ? t.common.perPerson : '/ person'}</small>
        </span>
        <span className="tour-card-cta">{lang === 'es' ? 'VER →' : 'VIEW →'}</span>
      </div>
    </a>
  );
}

function Footer({ lang, navigate, themeStyle }) {
  const t = window.I18N[lang];
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-headline">
          {t.footer.tease}<br/><em>{t.footer.teaseEm}</em>
        </h2>
        <button className="btn btn-terra btn-lg" onClick={() => navigate('booking')}>{t.footer.cta} →</button>
        <div className="footer-grid">
          <div>
            <div className="logo" style={{marginBottom:16}}>
              <Logo themeMode="dark" themeStyle={themeStyle} height={56} />
            </div>
            <p style={{fontSize:14, color:'#ffffffAA', maxWidth:320, lineHeight:1.5}}>
              {t.footer.address}<br/>
              Ciudad de México, 06700<br/>
              hola@loschillangos.mx
            </p>
          </div>
          <div>
            <h5>{t.footer.colTour}</h5>
            <ul>
              {window.TOURS.slice(0, 5).map(tour => (
                <li key={tour.id}>
                  <a onClick={() => navigate('detail', tour.id)} style={{cursor:'pointer'}}>
                    {lang === 'es' ? tour.titleES : tour.titleEN}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>{t.footer.colCompany}</h5>
            <ul>
              <li><a onClick={() => navigate('home', 'about')} style={{cursor:'pointer'}}>{t.nav.about}</a></li>
              <li><a onClick={() => navigate('home', 'services')} style={{cursor:'pointer'}}>{t.nav.services}</a></li>
              <li><a onClick={() => navigate('home', 'faq')} style={{cursor:'pointer'}}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>{t.footer.colHelp}</h5>
            <ul>
              <li><a href="mailto:hola@loschillangos.mx">hola@loschillangos.mx</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span style={{fontFamily:'var(--mono)', fontSize:11, color:'#ffffff88', letterSpacing:'0.08em', textTransform:'uppercase'}}>
            {t.footer.copyright}
          </span>
          <span style={{fontFamily:'var(--mono)', fontSize:11, color:'#ffffff88', letterSpacing:'0.08em', textTransform:'uppercase'}}>
            19.43°N · 99.13°W
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, TourCard, Logo, useI18n });
