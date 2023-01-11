import React from 'react'
import CounterDisplay from './CounterDisplay'
import HeadrePlus from './HeadrePlus'
import "./App.css"
import Timer from './Timer'

const App = () => {


  return (
    <div>

      <HeadrePlus/>
      
      <CounterDisplay />
      <Timer/>
    </div>
  )
}

export default App
