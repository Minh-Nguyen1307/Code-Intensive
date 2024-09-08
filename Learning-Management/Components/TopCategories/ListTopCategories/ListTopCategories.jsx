import Categories from "../Categories/Categories";
import './ListTopCategories.css'

import { faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
export default function ListTopCategories() {
  return (
    <div className="listTopCategories">
      <Categories iconCategories={faMicroscope} categories="Astrology" numberCourses="11 Courses"/>
      <Categories iconCategories={faWindowMaximize} categories="Development" numberCourses="12 Courses"/>
      <Categories iconCategories={faCreditCard} categories="Marketing" numberCourses="12 Courses"/>
      <Categories iconCategories={faAtom} categories="Physics" numberCourses="12 Courses"/>
    </div>
  )
}
