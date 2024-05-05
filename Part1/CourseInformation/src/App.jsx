const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.numberOfExercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part name={props.array[0].name} numberOfExercises={props.array[0].numberOfExercises} />
    <Part name={props.array[1].name} numberOfExercises={props.array[1].numberOfExercises} />
    <Part name={props.array[2].name} numberOfExercises={props.array[2].numberOfExercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const array = [
    {name: 'Fundamentals of React', numberOfExercises: 10},
    {name: 'Using props to pass data', numberOfExercises: 7},
    {name: 'State of a component', numberOfExercises: 14}
  ]
  const total = array[0].numberOfExercises + array[1].numberOfExercises + array[2].numberOfExercises

  return (
    <div>
      <Header course={course} />
      <Content array={array} />
      <Total total={total} />
    </div>
  )
}

export default App
