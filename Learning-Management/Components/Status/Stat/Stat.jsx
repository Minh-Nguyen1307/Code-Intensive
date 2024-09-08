import './Stat.css'
const Stat = (props) => {
    const {numberStat, describeStat} = props;


  return (
    <div className='stat'>
        <h3>{numberStat}</h3>
        <p>{describeStat}</p>
    </div>
  )
}
export default Stat;