import './App.css';
import './Counter';
import './Greeting';
import Counter from './Counter';
import Greeting from './Greeting';
import { useState } from 'react';
import TodoList from './ToDoList';

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail]= useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return(
    <div>
      <input type='text' placeholder='Name' value={name} onChange={handleNameChange}/>
      <input type='number' placeholder='Age' value={age} onChange={handleAgeChange}/>
      <input type='email' placeholder='Email' value={email} onChange={handleEmailChange}/>

      <p>{name} Berumur {age} tahun dan email adalah {email}.</p>
    </div>
  );
}

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
      <Example/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
