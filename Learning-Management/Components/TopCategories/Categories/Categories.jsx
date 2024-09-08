import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Categories = (props) => {
const { iconCategories, categories, numberCourses}  = props;

  return (
    <div className='categories'>
        <div>
            <FontAwesomeIcon icon={iconCategories} className='iconCategories' />
        </div>
        <h6>{categories}</h6>
        <p>{numberCourses}</p>
    </div>
  )
}
export default Categories;
