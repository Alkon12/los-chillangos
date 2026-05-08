// Home page
const TourCard = window.TourCard;
function Home({ lang, navigate, scrollTo }) {
  const t = window.I18N[lang];
  const [filter, setFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const toursRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (scrollTo) {
      const map = { about: aboutRef, services: servicesRef, faq: faqRef, tours: toursRef };
      const r = map[scrollTo];
      if (r && r.current) {
        setTimeout(() => r.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [scrollTo]);

  // Toggle nav "over-hero" state based on scroll position
  useEffect(() => {
    const apply = () => {
      const nav = document.querySelector('.nav');
      if (!nav || !heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      // Nav is 72px tall; while hero bottom is well below the nav, nav is "over hero".
      if (heroBottom > 96) nav.classList.add('over-hero');
      else nav.classList.remove('over-hero');
    };
    // Apply immediately and again next frame (DOM may not be settled).
    apply();
    const raf = requestAnimationFrame(apply);
    window.addEventListener('scroll', apply, { passive: true });
    window.addEventListener('resize', apply);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', apply);
      window.removeEventListener('resize', apply);
      const nav = document.querySelector('.nav');
      if (nav) nav.classList.remove('over-hero');
    };
  }, []);

  const filterMap = ['All', 'ebike', 'walking', 'daytrip', 'New'];
  const filterIdx = t.catalog.filters.indexOf(filter);
  const activeKey = filterIdx >= 0 ? filterMap[filterIdx] : 'All';

  const visibleTours = window.TOURS.filter(tour => {
    if (activeKey === 'All') return true;
    if (activeKey === 'New') return (tour.tagEN === 'New');
    return tour.cat === activeKey;
  });

  // Build animated headline. We split each phrase into words and wrap them
  // for the rising-word reveal animation.
  const splitWords = (str) => str.split(/(\s+)/).filter(Boolean);
  const headWords = [
    ...splitWords(t.hero.h1a),
    'BREAK',
    ...splitWords(t.hero.h1b),
    ' ',
    { em: t.hero.h1c },
    splitWords(t.hero.h1d).join('') || ''
  ];
  let wordIdx = 0;

  return (
    <div>
      {/* Cinematic Hero */}
      <section className="hero-cine" ref={heroRef}>
        <div className="hero-cine-media">
          <img className="hero-cine-img" src="assets/calle-mural.png" alt="Los Chillangos mural — Calle Chilanga, CDMX" />
        </div>
        <div className="container hero-cine-inner">
          <div className="hero-cine-top fade-in" style={{animationDelay:'0.1s'}}>
            <span><span className="dot"></span>Live · CDMX · 19.43°N 99.13°W</span>
            <span style={{display:'flex', gap:24, flexWrap:'wrap'}}>
              <span>Est. 2024</span>
              <span style={{color:'rgba(255,243,214,0.4)'}}>/</span>
              <span>Roma · Condesa · Coyoacán · Centro</span>
            </span>
          </div>

          <div className="hero-cine-mid">
            <div className="hero-cine-eyebrow fade-in" style={{animationDelay:'0.25s'}}>
              {t.hero.eyebrow}
            </div>
            <h1 className="hero-cine-headline">
              {headWords.map((w, i) => {
                if (w === 'BREAK') return <br key={i} />;
                if (typeof w === 'object' && w.em) {
                  const delay = 0.4 + wordIdx * 0.09;
                  wordIdx++;
                  return (
                    <span className="word" key={i}>
                      <span style={{animationDelay: `${delay}s`}}>
                        <em>{w.em}</em>
                      </span>
                    </span>
                  );
                }
                if (/^\s+$/.test(w)) {
                  return <span key={i}>{w}</span>;
                }
                const delay = 0.4 + wordIdx * 0.09;
                wordIdx++;
                return (
                  <span className="word" key={i}>
                    <span style={{animationDelay: `${delay}s`}}>{w}</span>
                  </span>
                );
              })}
            </h1>
          </div>

          <div className="hero-cine-bot">
            <p className="hero-cine-lede fade-in" style={{animationDelay:'1.1s'}}>
              {t.hero.lede}
            </p>
            <div className="hero-cine-stats fade-in" style={{animationDelay:'1.25s'}}>
              <div className="hero-cine-stat">
                <span className="num">12</span>
                <span className="lbl">Curated routes<br/>across the city</span>
              </div>
              <div className="hero-cine-stat">
                <span className="num">3–4h</span>
                <span className="lbl">Per tour<br/>conversational pace</span>
              </div>
              <div className="hero-cine-stat">
                <span className="num">8 max</span>
                <span className="lbl">Group size<br/>no bus crowds</span>
              </div>
              <div className="hero-cine-stat">
                <span className="num">4.96</span>
                <span className="lbl">★ avg rating<br/>1,200+ guests</span>
              </div>
            </div>
            <div className="hero-cine-ctas fade-in" style={{animationDelay:'1.4s'}}>
              <button className="btn btn-primary btn-lg" onClick={() => toursRef.current?.scrollIntoView({behavior:'smooth'})}>{t.hero.ctaPrimary} →</button>
              <button className="btn btn-ghost btn-lg" onClick={() => aboutRef.current?.scrollIntoView({behavior:'smooth'})}>{t.hero.ctaGhost}</button>
            </div>
          </div>
        </div>
        <div className="hero-cine-scroll">
          <span>Scroll</span>
          <span className="hero-cine-scroll-line"></span>
        </div>
      </section>

      {/* Search bar */}
      <div className="hero-search-bar">
        <div className="container">
          <div className="search-widget">
            <div className="search-field">
              <label>{t.hero.search.tour}</label>
              <select defaultValue="">
                <option value="">{t.hero.search.any}</option>
                {window.TOURS.map(tr => <option key={tr.id} value={tr.id}>{lang==='en' ? tr.titleEN : tr.titleES}</option>)}
              </select>
            </div>
            <div className="search-field">
              <label>{t.hero.search.date}</label>
              <input type="text" placeholder={t.hero.search.today} onFocus={(e) => e.target.type='date'} onBlur={(e) => { if (!e.target.value) e.target.type='text'; }} />
            </div>
            <div className="search-field">
              <label>{t.hero.search.people}</label>
              <select defaultValue="2">
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <button className="btn btn-terra" onClick={() => navigate('booking')}>{t.hero.search.cta} →</button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Coyoacán <em>·</em> Roma Norte <em>·</em> Condesa <em>·</em> San Ángel <em>·</em> Polanco <em>·</em> Xochimilco <em>·</em> Teotihuacán <em>·</em> Centro Histórico <em>·</em></span>
          <span>Coyoacán <em>·</em> Roma Norte <em>·</em> Condesa <em>·</em> San Ángel <em>·</em> Polanco <em>·</em> Xochimilco <em>·</em> Teotihuacán <em>·</em> Centro Histórico <em>·</em></span>
        </div>
      </div>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>{t.values.eyebrow} <span style={{margin:'0 8px'}}>·</span> 01</div>
              <h2 className="section-title">{t.values.title}</h2>
            </div>
            <p className="section-sub">{t.values.sub}</p>
          </div>
          <div className="values">
            {t.values.items.map((v, i) => (
              <div className="value-cell" key={i}>
                <div className="value-num">0{i+1}</div>
                <h3 className="value-title">{v.t}</h3>
                <p className="value-desc">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="section" ref={toursRef} style={{paddingTop:0}}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>{t.catalog.eyebrow} <span style={{margin:'0 8px'}}>·</span> 02</div>
              <h2 className="section-title">{t.catalog.title}</h2>
            </div>
            <p className="section-sub">{t.catalog.sub}</p>
          </div>
          <div className="filter-bar">
            {t.catalog.filters.map(f => (
              <button key={f} className={`filter-chip ${filter===f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="tour-grid">
            {visibleTours.map(tour => (
              <TourCard key={tour.id} tour={tour} lang={lang} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial / About */}
      <section className="section" ref={aboutRef} style={{background:'var(--bg-warm)'}}>
        <div className="container">
          <div className="editorial">
            <div className="editorial-img placeholder dark" data-label="Team portrait · workshop, Roma Sur"></div>
            <div>
              <div className="eyebrow" style={{marginBottom:24}}>{t.editorial.eyebrow} <span style={{margin:'0 8px'}}>·</span> 03</div>
              <h3>{t.editorial.title}</h3>
              <p>{t.editorial.p1}</p>
              <p>{t.editorial.p2}</p>
              <button className="btn btn-ghost" style={{marginTop:16}}>Meet the guides →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container-tight" style={{textAlign:'center'}}>
          <div className="eyebrow" style={{marginBottom:32}}>{t.testimonial.eyebrow}</div>
          <p className="testimonial">{t.testimonial.quote}</p>
          <div className="testimonial-meta" style={{justifyContent:'center'}}>
            <div className="testimonial-avatar placeholder" data-label=""></div>
            <div>
              <div className="testimonial-name">{t.testimonial.name}</div>
              <div className="testimonial-loc">{t.testimonial.loc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" ref={servicesRef} style={{paddingTop:0}}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>{t.services.eyebrow} <span style={{margin:'0 8px'}}>·</span> 04</div>
              <h2 className="section-title">{t.services.title}</h2>
            </div>
            <p className="section-sub">{t.services.sub}</p>
          </div>
          <div className="services">
            {t.services.items.map((s, i) => (
              <div className="service" key={i}>
                <div className="service-icon">{['↗','◐','✦'][i]}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
                <a className="service-link">Inquire →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" ref={faqRef} style={{paddingTop:0}}>
        <div className="container-tight">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>{t.faq.eyebrow} <span style={{margin:'0 8px'}}>·</span> 05</div>
              <h2 className="section-title">{t.faq.title}</h2>
            </div>
          </div>
          <div className="faq-list">
            {t.faq.items.map((f, i) => (
              <div className={`faq-item ${openFaq===i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq===i ? -1 : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.Home = Home;
