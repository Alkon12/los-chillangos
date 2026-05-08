// Tour Detail page
function Detail({ lang, tourId, navigate }) {
  const t = window.I18N[lang];
  const tour = window.TOURS.find(x => x.id === tourId) || window.TOURS[0];
  const [riders, setRiders] = useState(2);

  return (
    <div>
      <section className="container detail-hero">
        <div className="breadcrumb">
          <a onClick={() => navigate('home')} style={{cursor:'pointer'}}>Home</a>
          <span>/</span>
          <a onClick={() => navigate('home','tours')} style={{cursor:'pointer'}}>{t.nav.tours}</a>
          <span>/</span>
          <span style={{color:'var(--ink)'}}>{lang==='en' ? tour.titleEN : tour.titleES}</span>
        </div>
        <div className="eyebrow" style={{marginBottom:16}}>{tour.cat === 'ebike' ? 'E-bike tour' : tour.cat === 'walking' ? 'Walking tour' : 'Day trip'} · {tour.duration}</div>
        <h1 className="detail-headline">
          {lang==='en' ? tour.titleEN : tour.titleES}<em style={{fontStyle:'italic',color:'var(--terra)'}}>.</em>
        </h1>
        <div className="detail-meta">
          <div>{t.detail.duration}<strong>{tour.duration}</strong></div>
          <div>{t.detail.group}<strong>{t.detail.groupVal}</strong></div>
          <div>{t.detail.lang}<strong>{t.detail.langVal}</strong></div>
          <div>{t.detail.level}<strong>{t.detail.levelVal}</strong></div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-img placeholder" data-label={tour.photo}></div>
          <div className={`gallery-img placeholder ${tour.photoTone==='terra'?'terra':''}`} data-label="Detail · bike on cobble"></div>
          <div className="gallery-img placeholder dark" data-label="Guide portrait"></div>
          <div className="gallery-img placeholder moss" data-label="Stop · café avellaneda"></div>
          <div className="gallery-img placeholder" data-label="Group · Chapultepec lake"></div>
        </div>
      </section>

      <section className="container">
        <div className="detail-body">
          <div className="detail-content">
            <section>
              <h3>{t.detail.sectionAbout}</h3>
              <p>{t.detail.aboutP1}</p>
              <p>{t.detail.aboutP2}</p>
            </section>
            <section>
              <h3>{t.detail.sectionItin}</h3>
              <div>
                {t.detail.itin.map((it, i) => (
                  <div className="itinerary-item" key={i}>
                    <div className="itinerary-time">{it.t}</div>
                    <div className="itinerary-content">
                      <h4>{it.h}</h4>
                      <p>{it.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3>{t.detail.sectionIncl}</h3>
              <div className="includes">
                {t.detail.includes.map((inc, i) => (
                  <div className="include-row" key={i}>
                    <span className="include-icon">✓</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3>{t.detail.sectionMeet}</h3>
              <p>{t.detail.meetText}</p>
              <div className="placeholder" data-label="Map · Coyoacán meeting point" style={{aspectRatio:'21/9', borderRadius:4, marginTop:16}}></div>
            </section>
          </div>
          <aside className="booking-sidebar">
            <div className="booking-price">
              <div>
                <div className="price-label">{t.common.from}</div>
                <div className="price-amount">${tour.price}</div>
              </div>
              <div className="price-label">{t.common.perPerson}</div>
            </div>
            <div className="field-stack">
              <div className="field">
                <label>{t.hero.search.date}</label>
                <input type="date" defaultValue="2026-05-12" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>{t.hero.search.people}</label>
                  <select value={riders} onChange={e => setRiders(+e.target.value)}>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>Time</label>
                  <select defaultValue="14:00"><option>09:00</option><option>14:00</option><option>16:00</option></select>
                </div>
              </div>
            </div>
            <div className="summary-row"><span>${tour.price} × {riders}</span><span>${tour.price*riders}</span></div>
            <div className="summary-row"><span>{t.booking.summary.fee}</span><span>$0</span></div>
            <div className="summary-row total"><span>{t.booking.summary.total}</span><span>${tour.price*riders}</span></div>
            <button className="btn btn-terra btn-lg" style={{width:'100%', marginTop:16}} onClick={() => navigate('booking', tour.id)}>{t.nav.book} →</button>
            <p className="mono" style={{fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', textAlign:'center', color:'var(--ink-muted)', marginTop:12}}>Free cancellation · 24h before</p>
          </aside>
        </div>
      </section>
    </div>
  );
}

window.Detail = Detail;
