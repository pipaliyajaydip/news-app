import './App.css';
import NavBar from './components/NavBar/navBar';
import NewsCard from './components/News/newsCard';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <NewsCard />
      </body>
    </div>
  );
}

export default App;
