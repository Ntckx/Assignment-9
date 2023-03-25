// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import List from "./components/List"
import TypeMe from "./components/TypeMe"
import MyForm from "./components/MyForm"
function App() {
    const cardData = [
      {
        Name: "John Doe",
        Job: "Engineer",
        Hobby: "Listening to music"
      },
      {
        Name: "John Doe",
        Job: "Engineer",
        Hobby: "Listening to music"
      },
      {
        Name: "John Doe",
        Job: "Engineer",
        Hobby: "Listening to music"
      }];
  return (
    <div>
    <List users={cardData}/>
    <TypeMe/>
    <MyForm/>
    </div>
  )
}

export default App
