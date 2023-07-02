import './App.css';
import Navbar from './components/navbar/Navbar';
// import Navbar from './components/navbar/Navbar';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>  
    </div>
  );
}

export default App;
