import React, {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => {
  return(
      <button onClick={handleClick}>
        {text}
      </button>
  )
}

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseBuOne = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
      <div>
        <Display counter={counter} />
        <Button handleClick={increaseByOne} text='plus'/>
        <Button handleClick={decreaseBuOne} text='minus'/>
        <Button handleClick={reset} text='reset'/>
      </div>
  )
}

export default App