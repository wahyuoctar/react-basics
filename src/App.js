import  './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import BandSection from './components/BandSection/BandSection'
import TourSection from './components/TourSection/TourSection';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ContentCard from './components/ContentCard/ContentCard';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3'>
    <ContentCard/>
        </div>
      </div>
    </div>
    {/* <BandSection/>
    <TourSection/>
    <ClassComponent/> */}
    </>
  );
}

export default App;
