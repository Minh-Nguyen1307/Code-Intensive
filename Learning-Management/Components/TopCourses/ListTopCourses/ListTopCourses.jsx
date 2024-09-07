import Courses from "../Courses/Courses";

const ListTopCourses = (props) => {
  const { courses = [] } = props;

  return (
    <div className="d-flex align-item-center justify-content-between gap-8 width-1280 height-338 ">
      <Courses image='./public/Courses.png' title="Beginner's Guide to Design" author="By Ronald Richards" rating="(1200 Ratings)" content="22 Total Hours. 155 Lectures. Beginner" cost="$149.9"/>
      <Courses image='./public/Courses.png' title="Beginner's Guide to Design" author="By Ronald Richards" rating="(1200 Ratings)" content="22 Total Hours. 155 Lectures. Beginner" cost="$149.9"/>
      <Courses image='./public/Courses.png' title="Beginner's Guide to Design" author="By Ronald Richards" rating="(1200 Ratings)" content="22 Total Hours. 155 Lectures. Beginner" cost="$149.9"/>
      <Courses image='./public/Courses.png' title="Beginner's Guide to Design" author="By Ronald Richards" rating="(1200 Ratings)" content="22 Total Hours. 155 Lectures. Beginner" cost="$149.9"/>
    </div>
  )
}

export default ListTopCourses;
