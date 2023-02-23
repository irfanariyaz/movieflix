import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav from '../Nav'
import "./profileScreen.css"
import{auth} from "../firebase"

function ProfileScreen() {
    const user= useSelector(selectUser)
  return (
    <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            <div className="profileScreen__details">
                <h2>{user.email}</h2>
                <div className="profileScreen__plans">
                <h3>Plans(Current Plan:   <span className='planSpan'> ()</span>)</h3>   
                <section>
                            <div className="product">
                                <div className="description">
                                    <h3>Basic</h3>
                                    <h5>$9.99</h5>
                                </div>
                               
                                    <button className="profilescreenButton"  type="submit">
                                    Subscribe
                                    </button>
                                                      
                            </div>
                            <div className="product">
                                <div className="description">
                                    <h3>Standard</h3>
                                    <h5>$14.89</h5>
                                </div>
                              
                                    <button className="profilescreenButton"  type="submit">
                                    Subscribe
                                    </button>
                                                             
                            </div>
                            <div className="product">
                                <div className="description">
                                    <h3>PREMIUM</h3>
                                    <h5>$19.99</h5>
                                </div>
                             
                            
                                    <button className="profilescreenButton" type="submit">
                                    Subscribe
                                    </button>
                                                           
                            </div>
                        </section>
                <button className='profileScreen__signOut' onClick={()=>auth.signOut()}>Sign Out</button>
                </div>

            </div>
            </div>

            </div>


    </div>
  )
}

export default ProfileScreen