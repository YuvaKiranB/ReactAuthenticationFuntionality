// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headerContainer">
    <ul className="ul">
      <li className="li">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="li">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
