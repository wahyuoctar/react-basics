import  './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import BandSection from './components/BandSection/BandSection'
import TourSection from './components/TourSection/TourSection';

function App() {
  return (
    <>
    <Navbar/>
    <BandSection/>
    <TourSection/>
    </>
  );
}

export default App;
