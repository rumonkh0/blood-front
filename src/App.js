import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Home from './components/page/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
