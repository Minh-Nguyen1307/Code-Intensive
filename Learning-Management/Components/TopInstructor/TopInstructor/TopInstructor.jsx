import HeaderTopInstructor from '../HeaderTopInstructor/HeaderTopInstructor'
import ListTopInstructor from '../ListTopInstructor/ListTopInstructor'
import './TopInstructor.css'

export default function TopInstructor() {
  return (
    <div className='topInstructor'>
        <HeaderTopInstructor />
        <ListTopInstructor />
    </div>
  )
}
