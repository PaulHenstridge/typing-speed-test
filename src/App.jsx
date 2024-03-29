import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextWindow from './components/TextWindow'
import InputContainer from './components/InputContainer'
import Dashboard from './components/Dashboard'
import texts from './assets/texts'
import Timer from './components/Timer'
import TextSelect from './components/TextSelect'
import Header from './components/Header'

function App() {
  const [text, setText] = useState(``)

  const [userInput, setUserInput] = useState('')

  const [correct, setCorrect] = useState(true)

  const [wpmScore, setWpmScore] = useState('')

  const [clockIsRunning, setClockIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const [errors, setErrors] = useState(0)

  const [textSelected, setTextSelected] = useState(false)

  const chooseText = (text) => {
    setText(text)
    setTextSelected(true)
    console.log(text)
  }

  useEffect(() => {
    if (!clockIsRunning) return

    const timerId = setInterval( ()=> {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1)
    }, 1000)
    return () => clearInterval(timerId)
  }, [clockIsRunning, elapsedTime])

  useEffect(() => {
    if(!correct) setErrors(errors + 1)
  },[correct])

  const onUserInput = (e) => {
    if (elapsedTime === 0) setClockIsRunning(true)
    const currentInput = e.target.value
    setUserInput(currentInput)
    // compare user input to target text, set correct true/false
      setCorrect(currentInput === text.slice(0,currentInput.length))
    // check for completion
      if (correct && currentInput.length === text.length){
        setClockIsRunning(false)
        returnResults()
      }
  }

  const returnResults = () => {
    setWpmScore(Math.round(((userInput.length/5)/elapsedTime)*60))
  }

  return (
    <>
    <Header />
    {!textSelected && <TextSelect handleTextSelection={chooseText}/>}
    {textSelected && <TextWindow text={text} completedLength={userInput.length} iscorrect={correct}/>}
    {textSelected &&<InputContainer userInput={userInput} handleUserInput={onUserInput}/>}
    {textSelected &&<Dashboard correct={correct} chars={userInput.length} wpm={wpmScore} errors={errors}/>}
    {textSelected &&<Timer secsElapsed={elapsedTime}/>}
    </>
  )
}

export default App
