import React, { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100

    if (all === 0){
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return(
        <table>
            <tbody>
                <Statistic text={"good"} value={good}/>
                <Statistic text={"neutral"} value={neutral}/>
                <Statistic text={"bad"} value={bad}/>
                <Statistic text={"all"} value={all}/>
                <Statistic text={"average"} value={average}/>
                <Statistic text={"positive"} value={positive}/>
            </tbody>
        </table>
    )
}

const Statistic = ({text, value}) => {
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



    return (
        <div>
            <h3>Give feedback</h3>
            <p>
                <Button handleClick={() => setGood(good + 1)} text={"good"}/>
                <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
                <Button handleClick={() => setBad(bad + 1)} text={"bad"}/>
            </p>
            <h3>statistics</h3>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App