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
      <Part name={props.parts[0].name} numberOfExercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} numberOfExercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} numberOfExercises={props.parts[2].exercises} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <p>
        <b>total of {props.total} exercises</b>
      </p>
    )
  }

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

export default Course