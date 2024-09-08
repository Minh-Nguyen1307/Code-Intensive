import './Courses.css'
const Courses = (props) => {
    const {imageCourse, title, author, rating, content, cost } = props;


  return (
    <div className="courses">
        <div className='coursesContent'>
            <img src={imageCourse}/>
            <div className='coursesWord'>
                <h6>{title}</h6>
                <p>{author}</p>
                <p>⭐⭐⭐⭐⭐{rating}</p>
                <p>{content}</p>
                <h5>{cost}</h5>
            </div>
        </div>
    </div>
  )
}
export default Courses;