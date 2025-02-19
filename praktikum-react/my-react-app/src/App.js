import './App.css';
import './Counter';
import './Greeting';
import Counter from './Counter';
import Greeting from './Greeting';

function Header() {
  return (
    <header>
      <h1>Aplikasi React EntFladda</h1>
    </header>
  );
}

function Main() {
  return(
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

function Footer() {
  return(
    <footer>
      <p>&copy;2025 Aplikasi React EntFladda</p>
    </footer>
  );
}

function App() {
  return(
    <div>
      <Header/>
      <Main/>
      <Greeting name="EntFladda"/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
