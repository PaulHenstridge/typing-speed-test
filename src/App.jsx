import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextWindow from './components/TextWindow'
import InputContainer from './components/InputContainer'
import Dashboard from './components/Dashboard'
import texts from './assets/texts'
import Timer from './components/Timer'

function App() {
  const [text, setText] = useState(`Words and words and words and words and words and more words.`)

  const [userInput, setUserInput] = useState('')

  const [correct, setCorrect] = useState(true)

  const [wpmScore, setWpmScore] = useState('')

  const [clockIsRunning, setClockIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect( () => {
    if (!clockIsRunning) return

    const timerId = setInterval( ()=> {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1)
    }, 1000)
    return () => clearInterval(timerId)
  }, [clockIsRunning, elapsedTime])


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
    setWpmScore(`Done you did ${Math.floor(userInput.length/5)} words in ${elapsedTime} secs! thats ${(elapsedTime/(userInput.length/5))*60} wpm!!!! wooopidooo.`)
  }

  return (
    <>
    <TextWindow text={text} completedLength={userInput.length} isCorrect={correct}/>
    <InputContainer userInput={userInput} handleUserInput={onUserInput}/>
    <Dashboard correct={correct} words={Math.floor(userInput.length/5)} wpm={wpmScore}/>
    <Timer secsElapsed={elapsedTime}/>
    </>
  )
}

export default App
