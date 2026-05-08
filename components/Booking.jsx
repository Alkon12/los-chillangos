// Booking flow — Date, People, Cart, Checkout, Confirmation
function MiniCalendar({ value, onChange }) {
  const today = new Date(2026, 4, 1); // May 2026
  const [view, setView] = useState({ y: 2026, m: 4 });
  const firstDay = new Date(view.y, view.m, 1);
  const dow = firstDay.getDay();
  const daysInMonth = new Date(view.y, view.m+1, 0).getDate();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dows = ['S','M','T','W','T','F','S'];

  const cells = [];
  for (let i = 0; i < dow; i++) cells.push(<div key={'e'+i} className="cal-day empty"></div>);
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(view.y, view.m, d);
    const past = date < today;
    const isToday = d === 1 && view.m === 4 && view.y === 2026;
    const selected = value && value.getTime() === date.getTime();
    // Mondays disabled (closed)
    const dayOfWeek = date.getDay();
    const closed = dayOfWeek === 1;
    cells.push(
      <button key={d}
        className={`cal-day ${past || closed ? 'disabled' : 'available'} ${selected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
        onClick={() => !past && !closed && onChange(date)}
        disabled={past || closed}>
        {d}
      </button>
    );
  }

  const prev = () => setView(v => v.m === 0 ? { y: v.y-1, m: 11 } : { y: v.y, m: v.m-1 });
  const next = () => setView(v => v.m === 11 ? { y: v.y+1, m: 0 } : { y: v.y, m: v.m+1 });

  return (
    <div className="calendar">
      <div className="cal-head">
        <h4>{monthNames[view.m]} {view.y}</h4>
        <div className="cal-nav">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>
      </div>
      <div className="cal-grid">
        {dows.map((d,i) => <div key={i} className="cal-dow">{d}</div>)}
        {cells}
      </div>
    </div>
  );
}

function Booking({ lang, navigate, tourId }) {
  const t = window.I18N[lang];
  const tour = window.TOURS.find(x => x.id === tourId) || window.TOURS[0];
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(new Date(2026, 4, 12));
  const [time, setTime] = useState('14:00');
  const [adults, setAdults] = useState(2);
  const [teens, setTeens] = useState(0);
  const [privatize, setPrivatize] = useState(false);
  const [pay, setPay] = useState('card');

  const totalRiders = adults + teens;
  const subtotal = tour.price * adults + Math.round(tour.price * 0.7) * teens + (privatize ? 140 : 0);
  const fee = Math.round(subtotal * 0.04);
  const total = subtotal + fee;

  const next = () => setStep(s => Math.min(s+1, 4));
  const prev = () => setStep(s => Math.max(s-1, 0));

  const dateStr = date.toLocaleDateString(lang==='en' ? 'en-US' : 'es-MX', { weekday:'long', month:'long', day:'numeric' });

  return (
    <div className="booking-page">
      <div className="container">
        <div className="breadcrumb">
          <a onClick={() => navigate('home')} style={{cursor:'pointer'}}>Home</a>
          <span>/</span>
          <a onClick={() => navigate('detail', tour.id)} style={{cursor:'pointer'}}>{lang==='en'?tour.titleEN:tour.titleES}</a>
          <span>/</span>
          <span style={{color:'var(--ink)'}}>{t.nav.book}</span>
        </div>

        <div className="steps">
          {t.booking.steps.map((s, i) => (
            <div className={`step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`} key={i}>
              <span className="step-num">{i < step ? '✓' : i+1}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {step === 4 ? (
          <ConfirmStep lang={lang} tour={tour} date={dateStr} time={time} riders={totalRiders} total={total} navigate={navigate} />
        ) : (
          <div className="booking-layout">
            <div className="booking-main">
              {step === 0 && (
                <Step1 t={t} date={date} setDate={setDate} time={time} setTime={setTime} />
              )}
              {step === 1 && (
                <Step2 t={t} adults={adults} setAdults={setAdults} teens={teens} setTeens={setTeens} privatize={privatize} setPrivatize={setPrivatize} />
              )}
              {step === 2 && (
                <Step3 t={t} tour={tour} lang={lang} adults={adults} teens={teens} privatize={privatize} setPrivatize={setPrivatize} />
              )}
              {step === 3 && (
                <Step4 t={t} pay={pay} setPay={setPay} />
              )}

              <div style={{display:'flex', justifyContent:'space-between', marginTop:48, gap:12}}>
                {step > 0 ? (
                  <button className="btn btn-ghost" onClick={prev}>← Back</button>
                ) : <span></span>}
                <button className="btn btn-terra btn-lg" onClick={next}>
                  {step === 3 ? t.booking.step4.confirm : 'Continue'} →
                </button>
              </div>
            </div>

            <CartSidebar t={t} tour={tour} lang={lang} dateStr={dateStr} time={time} totalRiders={totalRiders} subtotal={subtotal} fee={fee} total={total} privatize={privatize} adults={adults} teens={teens} />
          </div>
        )}
      </div>
    </div>
  );
}

function Step1({ t, date, setDate, time, setTime }) {
  const slots = [
    { time: '09:00', label: 'Morning · cool air', avail: 6 },
    { time: '11:30', label: 'Late morning', avail: 4 },
    { time: '14:00', label: 'Afternoon', avail: 8 },
    { time: '16:00', label: 'Golden hour', avail: 2 }
  ];
  return (
    <div>
      <h2>{t.booking.step1.title}</h2>
      <p className="lede">{t.booking.step1.lede}</p>
      <MiniCalendar value={date} onChange={setDate} />
      <h3 style={{fontFamily:'var(--serif)', fontSize:24, fontWeight:400, margin:'40px 0 0', letterSpacing:'-0.01em'}}>{t.booking.step1.timeTitle}</h3>
      <div className="timeslots">
        {slots.map(s => (
          <button key={s.time} className={`timeslot ${time===s.time ? 'selected' : ''}`} onClick={() => setTime(s.time)}>
            <strong style={{fontFamily:'var(--serif)', fontSize:20, display:'block'}}>{s.time}</strong>
            <small>{s.avail} left</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step2({ t, adults, setAdults, teens, setTeens, privatize, setPrivatize }) {
  return (
    <div>
      <h2>{t.booking.step2.title}</h2>
      <p className="lede">{t.booking.step2.lede}</p>
      <div className="stepper-grid">
        <div className="stepper-row">
          <div className="stepper-info">
            <h4>{t.booking.step2.adult.t}</h4>
            <p>{t.booking.step2.adult.d}</p>
          </div>
          <div className="stepper-controls">
            <button className="stepper-btn" onClick={() => setAdults(Math.max(1, adults-1))} disabled={adults<=1}>−</button>
            <span className="stepper-count">{adults}</span>
            <button className="stepper-btn" onClick={() => setAdults(Math.min(8, adults+1))} disabled={adults+teens>=8}>+</button>
          </div>
        </div>
        <div className="stepper-row">
          <div className="stepper-info">
            <h4>{t.booking.step2.teen.t}</h4>
            <p>{t.booking.step2.teen.d}</p>
          </div>
          <div className="stepper-controls">
            <button className="stepper-btn" onClick={() => setTeens(Math.max(0, teens-1))} disabled={teens<=0}>−</button>
            <span className="stepper-count">{teens}</span>
            <button className="stepper-btn" onClick={() => setTeens(teens+1)} disabled={adults+teens>=8}>+</button>
          </div>
        </div>
      </div>
      <h3 style={{fontFamily:'var(--serif)', fontSize:24, fontWeight:400, margin:'40px 0 16px', letterSpacing:'-0.01em'}}>{t.booking.step2.addons}</h3>
      <label className="stepper-row" style={{cursor:'pointer', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div className="stepper-info">
          <h4>{t.booking.step2.privatize.t}</h4>
          <p>{t.booking.step2.privatize.d}</p>
        </div>
        <input type="checkbox" checked={privatize} onChange={e => setPrivatize(e.target.checked)} style={{width:22, height:22, accentColor:'var(--terra)'}} />
      </label>
    </div>
  );
}

function Step3({ t, tour, lang, adults, teens, privatize, setPrivatize }) {
  const [code, setCode] = useState('');
  return (
    <div>
      <h2>{t.booking.step3.title}</h2>
      <p className="lede">{t.booking.step3.lede}</p>
      <div style={{border:'1px solid var(--line-strong)', borderRadius:8, padding:24, display:'flex', gap:20, alignItems:'flex-start'}}>
        <div className="placeholder" data-label={tour.photo} style={{width:140, aspectRatio:'1', borderRadius:4, flexShrink:0}}></div>
        <div style={{flex:1}}>
          <div className="eyebrow" style={{marginBottom:6}}>{tour.cat==='ebike'?'E-bike tour':tour.cat==='walking'?'Walking tour':'Day trip'} · {tour.duration}</div>
          <h3 style={{fontFamily:'var(--serif)', fontSize:26, fontWeight:400, margin:'0 0 8px', letterSpacing:'-0.01em'}}>{lang==='en'?tour.titleEN:tour.titleES}</h3>
          <p style={{margin:'0 0 12px', fontSize:13, color:'var(--ink-soft)'}}>{adults} adults{teens > 0 ? ` · ${teens} teens` : ''}{privatize ? ' · privatized' : ''}</p>
          <div style={{display:'flex', gap:16, fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--ink-muted)'}}>
            <button onClick={() => alert('Edit cart')} style={{color:'var(--ink)'}}>Edit</button>
            <button>{t.booking.step3.remove}</button>
          </div>
        </div>
        <div style={{fontFamily:'var(--serif)', fontSize:24}}>${tour.price * adults + Math.round(tour.price*0.7)*teens + (privatize?140:0)}</div>
      </div>
      <button className="btn btn-ghost" style={{marginTop:16}}>+ {t.booking.step3.add}</button>
      <div style={{marginTop:32, display:'flex', gap:8}}>
        <input className="field" type="text" placeholder={t.booking.step3.code} value={code} onChange={e => setCode(e.target.value)} style={{flex:1, padding:'14px 18px', borderRadius:6}} />
        <button className="btn btn-ghost">Apply</button>
      </div>
    </div>
  );
}

function Step4({ t, pay, setPay }) {
  return (
    <div>
      <h2>{t.booking.step4.title}</h2>
      <p className="lede">{t.booking.step4.lede}</p>
      <h3 style={{fontFamily:'var(--serif)', fontSize:24, fontWeight:400, margin:'0 0 16px', letterSpacing:'-0.01em'}}>{t.booking.step4.contact}</h3>
      <div className="field-grid" style={{marginBottom:32}}>
        <div className="field"><label>{t.booking.step4.first}</label><input defaultValue="Hana" /></div>
        <div className="field"><label>{t.booking.step4.last}</label><input defaultValue="Kobayashi" /></div>
        <div className="field full"><label>{t.booking.step4.email}</label><input type="email" defaultValue="hana@example.com" /></div>
        <div className="field full"><label>{t.booking.step4.phone}</label><input type="tel" placeholder="+1 718 555 0119" /></div>
      </div>
      <h3 style={{fontFamily:'var(--serif)', fontSize:24, fontWeight:400, margin:'0 0 16px', letterSpacing:'-0.01em'}}>{t.booking.step4.payment}</h3>
      <div className="pay-method">
        <button className={`pay-opt ${pay==='card'?'active':''}`} onClick={() => setPay('card')}>
          <span className="pay-opt-mark"></span>
          <span style={{fontWeight:500}}>{t.booking.step4.card}</span>
          <span style={{marginLeft:'auto', fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.08em', color:'var(--ink-muted)'}}>VISA · MC · AMEX</span>
        </button>
        <button className={`pay-opt ${pay==='oxxo'?'active':''}`} onClick={() => setPay('oxxo')}>
          <span className="pay-opt-mark"></span>
          <span style={{fontWeight:500}}>{t.booking.step4.oxxo}</span>
        </button>
      </div>
      {pay === 'card' && (
        <div className="field-grid">
          <div className="field full"><label>{t.booking.step4.cardNum}</label><input placeholder="4242 4242 4242 4242" /></div>
          <div className="field"><label>{t.booking.step4.exp}</label><input placeholder="05 / 28" /></div>
          <div className="field"><label>{t.booking.step4.cvc}</label><input placeholder="123" /></div>
        </div>
      )}
      {pay === 'oxxo' && (
        <p style={{fontSize:14, color:'var(--ink-soft)', padding:'16px 18px', background:'var(--cream)', borderRadius:6, border:'1px solid var(--line)'}}>
          We'll generate a payment voucher you can pay at any OXXO within 48 hours. Your booking is held during that time.
        </p>
      )}
    </div>
  );
}

function CartSidebar({ t, tour, lang, dateStr, time, totalRiders, subtotal, fee, total, privatize, adults, teens }) {
  return (
    <aside className="cart-summary">
      <div className={`cart-img placeholder ${tour.photoTone==='terra'?'terra':tour.photoTone==='moss'?'moss':''}`} data-label={tour.photo}></div>
      <div className="cart-body">
        <div className="eyebrow" style={{marginBottom:8}}>{t.booking.summary.tour}</div>
        <h3 className="cart-title">{lang==='en'?tour.titleEN:tour.titleES}</h3>
        <div className="summary-row"><span>{t.booking.summary.date}</span><span>{dateStr}</span></div>
        <div className="summary-row"><span>{t.booking.summary.time}</span><span>{time}</span></div>
        <div className="summary-row"><span>{t.booking.summary.riders}</span><span>{totalRiders} {totalRiders===1?'rider':'riders'}</span></div>
        {privatize && <div className="summary-row"><span>Privatized</span><span>+$140</span></div>}
        <div className="summary-row" style={{borderTop:'1px solid var(--line)', marginTop:8, paddingTop:14}}><span>{t.booking.summary.subtotal}</span><span>${subtotal}</span></div>
        <div className="summary-row"><span>{t.booking.summary.fee}</span><span>${fee}</span></div>
        <div className="summary-row total"><span>{t.booking.summary.total}</span><span>${total}</span></div>
      </div>
    </aside>
  );
}

function ConfirmStep({ lang, tour, date, time, riders, total, navigate }) {
  const t = window.I18N[lang];
  const code = 'VLT-' + Math.random().toString(36).slice(2,8).toUpperCase();
  return (
    <div className="confirm-card">
      <div className="confirm-mark">✓</div>
      <h2 className="confirm-headline">{t.booking.step5.title}</h2>
      <p className="confirm-sub">{t.booking.step5.sub}</p>
      <div className="confirm-detail">
        <div className="confirm-row"><span className="key">{t.booking.step5.booking}</span><span className="val">{code}</span></div>
        <div className="confirm-row"><span className="key">{t.booking.summary.tour}</span><span className="val">{lang==='en'?tour.titleEN:tour.titleES}</span></div>
        <div className="confirm-row"><span className="key">{t.booking.step5.date}</span><span className="val">{date}</span></div>
        <div className="confirm-row"><span className="key">{t.booking.step5.time}</span><span className="val">{time}</span></div>
        <div className="confirm-row"><span className="key">{t.booking.step5.riders}</span><span className="val">{riders}</span></div>
        <div className="confirm-row"><span className="key">{t.booking.step5.meet}</span><span className="val">{t.detail.meetVal}</span></div>
        <div className="confirm-row"><span className="key">{t.booking.step5.total}</span><span className="val">${total} USD</span></div>
      </div>
      <div style={{display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap'}}>
        <button className="btn btn-ghost">{t.booking.step5.calendar} ↓</button>
        <button className="btn btn-primary" onClick={() => navigate('home')}>{t.booking.step5.back}</button>
      </div>
    </div>
  );
}

window.Booking = Booking;
