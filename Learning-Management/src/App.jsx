import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
  
      <Routes>
      
        <Route
          path="/" element={
            <>
              <Header />
              <Status />
              <TopCategories />
              <TopCourses />
              <TopInstructor />
              <Footer />
            </>
          }
        />
        
        <Route path="/DetailCourses" element={<DetailCourses />} />

      </Routes>

      
      
    </Router>
  )
}

export default App
