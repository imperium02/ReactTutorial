import React, { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const MostVotes = ({anecdotes, points}) => {
    const index = points.indexOf(Math.max(...points))
    return(
        <div>
            <p>{anecdotes[index]}</p>
            <p>has {points[index]} points</p>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const getNewAnecdote = () => {
        setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
    }

    const addPoints = () => {
        const copyPoints = [...points]
        copyPoints[selected] += 1
        setPoints(copyPoints)
    }

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(6).fill(0))

    return (
        <div>
            <h3>Anecdote of the day</h3>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} points</p>
            <p>
                <Button handleClick={getNewAnecdote} text={"get"} />
                <Button handleClick={addPoints} text={"vote"} />
            </p>
            <h3>Anecdote with most votes</h3>
            <MostVotes anecdotes={anecdotes} points={points} />
        </div>
    )
}

export default App