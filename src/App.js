import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.title.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
    </div>
  )
}

//test test git in webstorm

const Total = (props) => {
  let sum = 0
  props.course.parts.forEach(part => {
    sum += part.exercises
  });
  return sum
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header title={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App