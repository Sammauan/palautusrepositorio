import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const Statistics = (props) => {
  return(
      <table>
      <StatisticLine name={"good"} clicks={props.good} />
      <StatisticLine name={"neutral"} clicks={props.neutral} />
      <StatisticLine name={"bad"} clicks={props.bad} />
      <StatisticLine name={"all"} clicks={total(props.allClicks)} />
      <StatisticLine name={"average"} clicks= {average(props.allClicks)}  />
      <StatisticLine name={"positive"} clicks={positive(props.allClicks)} />
      </table>
  )
}


const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.name} </td>
        <td>{props.clicks} </td>
      </tr>
  )
}


const total = (clicks) => {
  return (
    clicks.length
  )
}


const positive = (clicks) => {
  let t = 0
  if (clicks.length === 0 ) {
    return (
      0
    )
  }

  clicks.forEach(value => { if (value > 0) {t = t + 1}  })
  t = 100 * t/clicks.length + " %"
  return (t)
}


const average = (clicks) => {
  let total = 0
  let t = 0
  if (clicks.length === 0 ) {
    return (
      0
    )
  }

  clicks.forEach(value => {total = total + value  })
  t = total / clicks.length
  return (t)
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  if(allClicks.length === 0) return (
    <div>
      <Header title= {"give feedback"} />
      <Button onClick={handleGoodClick} text= "good" />
      <Button onClick={handleNeutralClick} text= "neutral"/>
      <Button onClick={handleBadClick} text= "bad" />
      <Header title= {"statistic"} />
      <p>No feedback given </p>
    </div>
  )

  return (
    <div>
      <Header title= {"give feedback"} />
      <Button onClick={handleGoodClick} text= "good" />
      <Button onClick={handleNeutralClick} text= "neutral"/>
      <Button onClick={handleBadClick} text= "bad" />
      <Header title= {"statistic"} />
      <Statistics good= {good} neutral= {neutral} bad= {bad} allClicks= {allClicks} />
    </div>  
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)