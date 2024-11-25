import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <header className="app-header">
        Prueba Técnica Zede del Litoral 
      </header>
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <footer className="app-footer">
        <p>© by Marcelo Tigrero 2024</p>
      </footer>
    </div>
  );
}