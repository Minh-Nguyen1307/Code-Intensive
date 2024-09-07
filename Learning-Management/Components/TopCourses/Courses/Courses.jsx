
const Courses = (props) => {
    const {image, title, author, rating, content, cost } = props;

 
  return (
<div>
    <div className="width-298 height-338 border-1-solid-black">
        <img src={image} alt="" className="width-266 height-139 border-radius-50"/>

    </div>
</div>
  )
}
export default Courses;
