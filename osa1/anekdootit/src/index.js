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


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setAani] = useState(new Array(6+1).join('0').split('').map(parseFloat))
  const [max, setMax] = useState(0)
  const [best, setBest] = useState(0)

  const handleAnecdote = () => {
    let random = Math.floor(Math.random() * Math.floor(6))
    setSelected(random)
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setAani(copy)

    copy.forEach((value, index) => { if (value > max) {
      setMax(value) 
      setBest(index)}  })
  }
  
  console.log(points)
  return (
    <div>
      <Header title= "Anecdote of the day"></Header> 
      <p> {props.anecdotes[selected]} </p>
      <p> has {points[selected]} points </p>
      <Button onClick={handleAnecdote} text= "next anecdote" />
      <Button onClick={handleVote} text= "vote" />
      <Header title= "Anecdote with most votes"></Header>
      <p> {anecdotes[best]} </p>
    </div>
  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)