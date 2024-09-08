import Stat from '../Stat/Stat';
import './ListStatus.css';

export default function ListStatus() {
  return (
    <div className='listStatus'>
      <Stat numberStat="250+" describeStat="Courses by our best mentors"/>
      <Stat numberStat="1000+" describeStat="Courses by our best mentors"/>
      <Stat numberStat="15+" describeStat="Courses by our best mentors"/>
      <Stat numberStat="2400+" describeStat="Courses by our best mentors"/>
    </div>
  )
}
