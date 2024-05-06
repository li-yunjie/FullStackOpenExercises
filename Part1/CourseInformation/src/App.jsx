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
    <div>
    <Part name={props.part1.name} numberOfExercises={props.part1.numberOfExercises} />
    <Part name={props.part2.name} numberOfExercises={props.part2.numberOfExercises} />
    <Part name={props.part3.name} numberOfExercises={props.part3.numberOfExercises} />
    </div>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
