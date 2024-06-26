import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Navbar_Comp/Home';
import Services from './Navbar_Comp/Services';
import ContactUs from './Navbar_Comp/ContactUs';
import AboutUs from './Navbar_Comp/AboutUs';
import ChooseService from './Components/ChooseService';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/Services' element ={<Services/>} />
        <Route path='/ContactUs' element ={<ContactUs/>} />
        <Route path='/AboutUs' element ={<AboutUs/>} />
        <Route path='chooseservice' element = {<ChooseService/>} />
        <Route path='/login' element = {<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
