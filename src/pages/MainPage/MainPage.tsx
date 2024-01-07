import { NavLink } from "react-router-dom"
import './../../styles/index.scss'


const MainPage = () => {
  return (
    <div>
      <h2 className="">MainPage</h2>
      <NavLink to={'/about'}>о сайте</NavLink>
    </div>
  )
}

export default MainPage