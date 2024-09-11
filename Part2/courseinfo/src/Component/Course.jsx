const Header = (props) => {
    return (
      <h2>{props.course}</h2>
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
        {props.parts.map(part => (
          <Part key={part.id} name={part.name} numberOfExercises={part.exercises} />
        ))}
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