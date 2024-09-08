import HeaderTopCategories from "../HeaderTopCategories/HeaderTopCategories";
import ListTopCategories from "../ListTopCategories/ListTopCategories";

import './TopCategories.css'
export default function TopCategories() {
  return (
    <div className="topCategories">
      <HeaderTopCategories />
      <ListTopCategories />
    </div>
  )
}
