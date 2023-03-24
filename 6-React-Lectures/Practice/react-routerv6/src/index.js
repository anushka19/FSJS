import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //bring component in element //18:08
  <Router>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/myapps" element = {<Navigate replace to ="/learn"/>} />     
      <Route path="/learn" element = {<Learn/>}>
          <Route path="courses" element={<Courses/>} > 
            <Route path=":courseid" element={<CourseId/>}/>
          </Route>
          <Route path="bundles" element={<Bundles/>} />
        </Route> 

        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </Router>
);

//react componenets
function Home(){
  return (
    <div>
      <h1> Home route</h1>
    </div>
  )
}

function Learn(){
  return (
    <div>
      <h1> Learn</h1>
      <h4>All courses are listed here</h4>
      <Link to="/learn/courses">courses</Link> | 
      <Link to="/learn/bundles"> bundle</Link>
      <Outlet />
    </div>
  )
}

function Courses(){
  const courseList = ["React", "Angular", "Vue", "Nodejs"]
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h1> Course list</h1>
      <h4>Course card</h4>

      <p>More tests</p>
      <NavLink style={(isActive) => {
        return {
          backgroundColor: isActive ? "pink" : "yellow"
        }
      }} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
      <NavLink className="rounded bg-slate-200"  to={`/learn/courses/tests`}> tests</NavLink>


      <Outlet />
    </div>
  )
}

function Bundles(){
  return (
    <div>
     <h1> Bundle list</h1>
      <h4>Bundle card</h4>
    </div>
  )
}

function CourseId(){
  const navigate = useNavigate()
  const {courseid} = useParams()
  return (// we can use link trying use navigate hook
    <div>
      <h1>URL Params is: {courseid}</h1>
      <button onClick={() => {navigate("/dashboard", {state: courseid})}} className="rounded bg-sky-500">Price</button>

      <Link to="/dashboard" state={"JS"}>Test Link </Link>
    </div>
  )
}

function Dashboard(){
  const location = useLocation()
  return (
    <div>
     <h1> Info that I got here is {location.state}</h1>
      
    </div>
  )
}

//reportWebVitals();
