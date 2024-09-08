import './Instructor.css'

const Instructor = (props) => {
  const {imageInstructor, nameAuthor, jobTitle, starRating, numberStudent} = props;
  return (
    <div className='instructor'>
      
        <img src= {imageInstructor} alt="" />
        <h6>{nameAuthor}</h6>
        <p>{jobTitle}</p>
        <div className='intructors'>
          <p>⭐{starRating}</p>
          <p>{numberStudent}</p>
        </div>
    </div>
  )
}
export default Instructor;
