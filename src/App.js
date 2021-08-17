import React,{useState,useEffect} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SectionAdd from './Componet/SectionPlace/SectionAdd/SectionAdd';
import ClipLoader from "react-spinners/ClipLoader";



function App() {
    const[loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className='load'>
      {loading ? <div className="load"><ClipLoader color={'orange'} loading={loading}  size={80} /></div>:<Router>
        <Switch>
          <Route exact path="/">
            <SectionAdd></SectionAdd>
          </Route>
        </Switch>
      </Router>}
    </div>
  );
}

export default App;
