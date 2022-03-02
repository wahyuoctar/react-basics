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

const listToDO = [
  {
    date: "2 Mar 2022",
    action: "Belajar Programming",
    status: "Done"
  },
  {
    date: "4 Mar 2022",
    action: "Belajar Mengaji",
    status: "On Going"
  },
  {
    date: "7 Mar 2022",
    action: "Belajar Mengemudi",
    status: "Done"
  },
  {
    date: "10 Mar 2022",
    action: "Main Basket",
    status: "Done"
  },
  {
    date: "15 Mar 2022",
    action: "Ngaduk Semen",
    status: "On Going"
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

  const toDoItem = () =>{
    return listToDO.map((val) =>{
      return (
        <ToDoItem
        date = {val.date}
        action = {val.action}
        status = {val.status}
        />
      )
    })
  }
  return (
    <>
    {/* <Navbar/> */}
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3'>
          {/* {renderContentList()} */}
        {toDoItem()}
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
