import { useState } from 'react'
import  './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import BandSection from './components/BandSection/BandSection'
import TourSection from './components/TourSection/TourSection';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ContentCard from './components/ContentCard/ContentCard';
import ToDoItem from './components/ToDoItem/ToDoItem';
import { Button, Input } from 'reactstrap'
import axios from 'axios'

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

// const listToDO = [
//   {
//     date: "2 Mar 2022",
//     action: "Belajar Programming",
//     status: "Done"
//   },
//   {
//     date: "4 Mar 2022",
//     action: "Belajar Mengaji",
//     status: "On Going"
//   },
//   {
//     date: "7 Mar 2022",
//     action: "Belajar Mengemudi",
//     status: "Done"
//   },
//   {
//     date: "10 Mar 2022",
//     action: "Main Basket",
//     status: "Done"
//   },
//   {
//     date: "15 Mar 2022",
//     action: "Ngaduk Semen",
//     status: "On Going"
//   }
// ]

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

  const renderToDoItem = () =>{
    return toDoItem.map((val) =>{
      return (
        <ToDoItem
        date = {val.date}
        action = {val.action}
        isDone = {val.isDone}
        deleteData={()=> deleteItem(val.id)}
        editProgress={()=> editStatus(val.id)}
        />
      )
    })
  }

  const [todoInputValue, setTodoInputValue] = useState("")

  const [todoInputDateValue, setTodoInputDate] = useState("")

  const [toDoItem, setToNewList] = useState(
    [

    ]
  )

  const inputHandler = (event) => {
    const {value} = event.target
    setTodoInputValue(value)
  }

  const inputDateHandler = (event) => {
    const {value} = event.target
    setTodoInputDate(value)
  }

  const addTodoItem = () => {
    // let newTodoArray = [...toDoItem]
    // newTodoArray.push({
    //   date: todoInputDateValue,
    //   action: todoInputValue,
    //   isDone: "On Going"
    // })

    // setToNewList(newTodoArray)

    const newData = {
      date: todoInputDateValue,
      action: todoInputValue,
      isDone: false
    }

    axios.post("http://localhost:2000/todos", newData).then(() =>{
      fetchTodoList()
    })
  }

  const deleteItem = (id) => {
    // const newArray = [...toDoItem]
    // newArray.splice(index, 1)
    // setToNewList(newArray)

    axios.delete(`http://localhost:2000/todos/${id}`).then(() => {
      fetchTodoList()
    })
  }

  const editStatus = (id) => {
    // const newArray = [...toDoItem]
    // newArray[index].isDone = !newArray[index].isDone
    // setToNewList(newArray)
    
    const dataToFind = toDoItem.find((val) =>{
      return val.id === id
    })

    // axios.get(`http://localhost:2000/todos/${id}`).then((res) =>{
    //   const newIsDoneValue = !res.data.isDone
      
      axios.patch(`http://localhost:2000/todos/${id}`, { isDone: !dataToFind.isDone}).then(() =>{
        fetchTodoList()
      })
    // }

  }

  const fetchTodoList = () => {
    axios.get("http://localhost:2000/todos").then((res) => {
      setToNewList(res.data)
    })

  }

  return (
    <>
    {/* <Navbar/> */}
    <div className='container'>
      <div className='row my-3'>
        <div className='offset-3 col-5'>
          <Input onChange={inputHandler}/>
          <Input type='date' onChange={inputDateHandler} />
        </div>
        <div className='col-2'>
          <Button onClick={addTodoItem} color='success'>Add Todo</Button>
          <Button onClick={fetchTodoList} color='info'>Fetch Todo</Button>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3'>
          {/* {renderContentList()} */}
        {renderToDoItem()}
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
