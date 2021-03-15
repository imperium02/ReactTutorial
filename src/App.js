import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return(
    <p>
      {props.part} {props.excercise}
    </p>
  )
}

const Total = (props) => (
    <p>Number of exercises {props.sum}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content parts={part1} excercise={exercises1} />
      <Content parts={part2} excercise={exercises2} />
      <Content parts={part3} excercise={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App