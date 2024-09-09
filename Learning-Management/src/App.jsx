import React from 'react';
import {Routes, Route, Link, Router} from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Status from '../Components/Status/Status'
import TopCategories from '../Components/TopCategories/TopCategories/TopCategories'
import TopCourses from '../Components/TopCourses/TopCourses/TopCourses'
import TopInstructor from '../Components/TopInstructor/TopInstructor/TopInstructor'

import './App.css'
import DetailCourses from '../Components/DetailCourses/DetailCourses';



function App() {


  return (
    <>
        <Status />
        <TopCategories />
        <TopCourses />
        <TopInstructor />
        <Routes>
          <Route path="/DetailCourses" element={<DetailCourses />} />
        </Routes>
    </>
  )
}

export default App
