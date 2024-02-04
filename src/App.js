import React from 'react';
import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Homepage from './Pages/Home';
import Aboutpage from './Pages/About';
import Servicespage from './Pages/Services';
import Contactpage from './Pages/Contact';
import Loginpage from './Pages/Login';
import SignUppage from './Pages/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
   
   <>
      <BrowserRouter>
      <NavigationBar></NavigationBar> 
      <Routes>
      <Route path="/Home" element={<Homepage/>}/>
      <Route path="/About" element={ <Aboutpage/>}/>
      <Route path="/Services" element={<Servicespage/>}/>
      <Route path="/Contact" element={ <Contactpage/>}/>
      <Route path="/Login" element={<Loginpage/>}/>
      <Route path="/Signup" element={ < SignUppage /> }/> 
      </Routes>
     </BrowserRouter>
      
   <div className="appmain-container">
      <div className="appcenter-container">
      

       <Header></Header>
       
       <Footer></Footer>
      
       </div>
    </div>
   

   </>
   
  );
}

export default App;
