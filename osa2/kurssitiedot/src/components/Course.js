import React from 'react'

const MainHeader = (course) => {
  let id = course.course.id
  if (id === 1) {
    return (
      <div>
        <h1>Web development curriculum</h1>
     </div>
  )
  }
  else return null
}

const Header = (course) => {
  return (
    <div>
      <h2>{course.course}</h2>
    </div>
  )
}


const Content = (props) => {
  let course = props.course
  return (
    <div>
      <Part course= {course}/>
      <Total course= {course}/>
    </div>
  )
}


const Part = (props) => {
  let parts = props.course.parts

  return (
    parts.map(course =>
      <p key={course.id}>
        {course.name} {course.exercises}
      </p>
    )
  )
}


const Total = (courses) => {
  let parts = courses.course.parts
  let maara = parts.reduce((sum, order) => sum + order.exercises, 0) 

  return (
    <div>
      <b> <p>total of {maara} exercises </p> </b>
    </div>
  )
}


const Course = (courses) => {
  console.log(courses)
  return (
    courses.course.map(course =>
      <div key={course.id}>
        <MainHeader course= {course}/>
        <Header course= {course.name} />
        <Content course= {course} />
      </div>
    )
  )
}

export default Course