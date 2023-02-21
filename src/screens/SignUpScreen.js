import React from 'react'
import "./signUpScreen.css"

function SignUpScreen() {

  const register= (e)=>{
    e.preventDefault();

  }
  const signIn =(e)=>{
    e.preventDefault();
  }

  return (
    <div className='signUpScreen__login'>
       <h1>Sign In</h1>
       <form className='signUpScreen__form' action="">
        <input  type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button className='signUpScreen__button' type='submit' onClick={signIn}>Sign In</button>
        <h4><span className="signUpScreen__gray"> New to Netflix?</span>
        <span className='signUpScreen__link' onClick={register}>Sign up now</span></h4>
       </form>
    </div>
  )
}

export default SignUpScreen