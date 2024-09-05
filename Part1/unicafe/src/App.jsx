import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodClick = () => setGood(good + 1)
  const setNeutralClick = () => setNeutral(neutral + 1)
  const setBadClick = () => setBad(bad + 1)

  const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
  }

  const StatisticLine = ({text, value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = (good / total) * 100 + " %"

    if (total === 0) {
      return <p>No feedback given</p>
    }
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setGoodClick} text="good" />
      <Button handleClick={setNeutralClick} text="neutral" />
      <Button handleClick={setBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App