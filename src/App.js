import './App.css';
import 'react-router-dom';
import React from 'react';
import {  Route,Routes } from 'react-router-dom';
import Header from './Component/images/Header';
import Aboutus from './Pages/About Us/Aboutus';


import PersonalInformation from './Component/images/Personallnformation';
import Education from './Component/images/Education';
import WorkExperience from './Component/images/WorkEeperience';
import Myresume from './Component/images/Myresume';
import KeySkills from './Component/images/Keyskills';
import Templetes from './Pages/Home/Templates';
import Preview from './Pages/Preview/Preview';
import GettingStarted from './Component/images/GetttingStarted';
import Detailfilling from './Pages/Details Filling/Detailfilling';



  function App() {

  return (<>

       {/* all thr routes are defined with perticular path for Navigation Between Pages */}
       
 <Routes> <Route path="/Detailfilling" element={<Detailfilling/>} />
          <Route exact path='/Templete' element={<Templetes/>}/>
          <Route exact path='/header' element={<Header/>}/>
          <Route exact path="/personal" element={<PersonalInformation/>}/>
          <Route exact path="/education" element={<Education/>}/>
          <Route exact path="/aboutus" element={<Aboutus/>}/>
          <Route exact path="/" element={<GettingStarted/>}/>
          <Route exact path='/work' element={<WorkExperience/>}/>
          <Route exact path='/myresume' element={<Myresume/>}/>
          <Route exact path='/skills' element={<KeySkills/>}/>
          <Route exact path='/preview' element={<Preview/>}/>
  </Routes>
   </>
  );
}
export default App;