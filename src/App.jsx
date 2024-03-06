import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextWindow from './components/TextWindow'
import InputContainer from './components/InputContainer'
import Dashboard from './components/Dashboard'
import texts from './assets/texts'

function App() {
  const [text, setText] = useState(`You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly—Tom’s Aunt Polly, she is—and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before.
  Now the way that the book winds up is this: Tom and me found the money that the robbers hid in the cave, and it made us rich. We got six thousand dollars apiece—all gold. It was an awful sight of money when it was piled up. Well, Judge Thatcher he took it and put it out at interest, and it fetched us a dollar a day a piece all the year round—more than a body could tell what to do with.
  The Widow Douglas she took me for her son, and allowed she would sivilize me; but it was rough living in the house all the time, considering how dismal regular and decent the widow was in all her ways; and so when I couldn’t stand it no longer, I lit out. I got into my old rags and my sugar-hogshead again, and was free and satisfied.`)

  const [userInput, setUserInput] = useState('')

  const [correct, setCorrect] = useState(true)

  const onUserInput = (e) => {
    const currentInput = e.target.value
    setUserInput(currentInput)
    // compare user input to target text, set correct true/false
    console.log(currentInput,text.slice(0,userInput.length))
      setCorrect(currentInput === text.slice(0,currentInput.length))
    
  }



  return (
    <>
    <TextWindow text={text}/>
    <InputContainer userInput={userInput} handleUserInput={onUserInput}/>
    <Dashboard correct={correct}/>
    </>
  )
}

export default App
