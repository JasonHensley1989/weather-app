import './App.css';
import Header from './nav-components/Header';
import Footer from './nav-components/Footer';
import RoutesData from './utils/RoutesData';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <RoutesData/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
