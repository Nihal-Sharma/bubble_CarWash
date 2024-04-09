import React from 'react'
import LoginForm from '../Components/LoginForm'

const Home = () => {
  return (
    <div style={{width :'100vw' , display :'flex' , alignItems :'center' , flexDirection :'column'}}>
        <text style={{fontSize :'30px'}}>Book a Service</text>
        <div style={{marginTop :'100px'}}>
            {localStorage.getItem("LOGGEDIN") =="true" ? <></> : <LoginForm/>}
        </div>
    </div>
  )
}

export default Home