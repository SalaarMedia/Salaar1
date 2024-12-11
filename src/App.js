
import './App.css';
import { Home } from './HomePage_Component/Home';
import Menu from './HomePage_Component/Menu/Menu';
import {BrowserRouter, createBrowserRouter,RouterProvider} from 'react-router-dom'
import Work from './Work/Work';
import About from './About/About';
import Contect from './Contect/Contect';
import ServiceDesgin from './Services/ServiceDesgin/ServiceDesgin';
import ServiceTechnology from './Services/ServiceTechnology/ServiceTechnology';
import ServiceMarketing from './Services/ServiceMarketing/ServiceMarketing';
import Team from './Team/Team';
import Career from './Career/Career';
import GoToTop from './GoToTop/GoToTop';
import Footer from './HomePage_Component/Footer/Footer';


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Menu/><Home/></>
    },
    {
      path:"/work",
      element:<><Menu/><Work/></>
    },
    {
      path:"/about",
      element:<><Menu/><About/></>
    },
    {
      path:"/contect",
      element:<><Menu/><Contect/></>
    },
    {
      path:"/serviceDesgin",
      element:<><Menu/><ServiceDesgin/></>
    },
    {
      path:"/serviceTechnology",
      element:<><Menu/><ServiceTechnology/></>
    },
    {
      path:"/serviceMarketing",
      element:<><Menu/><ServiceMarketing/></>
    },

    {
      path:"/team",
      element:<><Menu/><Team/></>
    },

    {
      path:"/career",
      element:<><Menu/><Career/></>
    },
   
  
  ])




  return (
    <div className="">

      <RouterProvider router={router}/>
    
      <GoToTop/>
    </div>
  );
}

export default App;
