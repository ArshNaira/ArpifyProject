import logo from './logo.svg';
import './App.css';
import PersonalData from './components/PersonalData'; 
import { BrowserRouter, Route, Routes,NavLink } from "react-router-dom"
import AddingForm from './components/AddingForm';


function App() {
  return (    
    <BrowserRouter>
  <div>

    <div>      
      
      <Routes>
     <Route path='/addingForm' element={<AddingForm /> } /> 
     <Route path='' element={<PersonalData /> } /> 
     
     </Routes>
        
     
       </div>
    {/* <PersonalData /> */}
    
      
    </div>
    </BrowserRouter>
  );
}

export default App;
