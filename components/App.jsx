// App root — production version (no tweaks panel)
const { useState, useEffect } = React;
const { Nav, Footer, TourCard, Logo, Home, Detail, Booking } = window;

function App() {
  const [lang, setLang] = useState('en');
  const themeMode = 'light';
  const themeStyle = 'color';

  const [route, setRoute] = useState({ name: 'home', param: null, scrollTo: null });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.name, route.param]);

  const navigate = (name, param = null) => {
    if (name === 'home' && param) {
      setRoute({ name, param: null, scrollTo: param });
    } else {
      setRoute({ name, param, scrollTo: null });
    }
  };

  return (
    <>
      <Nav lang={lang} setLang={setLang} route={route.name} navigate={navigate} themeMode={themeMode} themeStyle={themeStyle} />
      {route.name === 'home' && <Home lang={lang} navigate={navigate} scrollTo={route.scrollTo} />}
      {route.name === 'detail' && <Detail lang={lang} tourId={route.param} navigate={navigate} />}
      {route.name === 'booking' && <Booking lang={lang} navigate={navigate} tourId={route.param || 'ebike-classic'} />}
      {route.name !== 'booking' && <Footer lang={lang} navigate={navigate} themeStyle={themeStyle} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
