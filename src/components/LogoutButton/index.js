// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }

  return (
    <div className="logoutButtonContainer">
      <button className="logoutButton" type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
