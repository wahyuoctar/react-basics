import  './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import BandSection from './components/BandSection/BandSection'
import TourSection from './components/TourSection/TourSection';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ContentCard from './components/ContentCard/ContentCard';
import ToDoItem from './components/ToDoItem/ToDoItem';

const data = [
  {
    username: "Mark",
    location: "BSD",
    numberOfLikes: 120,
    caption: "Halo kawan-kawan!"
  },
  {
    username: "Seto",
    location: "Jakarta",
    numberOfLikes: 23,
    caption: "Lagi overload kerjaan banget, mental health aku parah nih"
  },
  {
    username: "Anto",
    location: "Puncak",
    numberOfLikes: 314,
    caption: "Kacau, macet pars!"
  }
]

function App() {

  const renderContentList = () => {
    return data.map((val) =>{
      return (
        <ContentCard 
        username = {val.username}
        location = {val.location}
        numberOfLikes = {val.numberOfLikes}
        caption = {val.caption}
        />)
    })
  }
  return (
    <>
    {/* <Navbar/> */}
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3'>
          {/* {renderContentList()} */}
        <ToDoItem/>
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
