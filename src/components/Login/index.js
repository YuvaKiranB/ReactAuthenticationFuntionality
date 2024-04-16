// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken2 = Cookies.get('jwt_token')

  if (jwtToken2 !== undefined) {
    return <Redirect to="/" />
  }

  const loginUser = async () => {
    const {history} = props
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  return (
    <div className="loginContainer">
      <h1 className="loginHeading">Please Login</h1>
      <button type="button" onClick={loginUser} className="loginButton">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
