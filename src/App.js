import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';

function App() {
  const user=null;
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){

      }else{

      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">
       <Router>
        {!user ?
        <Login /> :
        (
          <Routes>
          <Route path='/'
                  element={<HomeScreen />}>
          </Route>
          {/* <Route path='/profile'
                  element={}>
          </Route> */}
        </Routes>
        )}
        
       </Router>
        
    </div>
  );
}

export default App;
