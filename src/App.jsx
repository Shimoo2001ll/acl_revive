import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Componnents/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Componnents/Login/Login'
import Signup from './Componnents/Signup/Signup'
import LayOut from './Componnents/LayOut/LayOut';
import HomeRid from './Componnents/HomeRid/HomeRid';
import Scan from './Componnents/Scan/Scan';
import Report from './Componnents/Report/Report';
import ForgetPass from './Componnents/ForgetPass/ForgetPass';
import Verify from './Componnents/ForgetPass/Verify';
import Newpass from './Componnents/ForgetPass/Newpass';
import Upload2 from './Componnents/Scan/Upload2';
import Upload3 from './Componnents/Scan/Upload3';

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forget",
    element: <ForgetPass />,
  },
  {
    path: "varify",
    element: <Verify />,
  },
  {
    path: "newpass",
    element: <Newpass />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path : "HomeRid",
        element: <HomeRid />,
      },
      {
        path: "Scan",
        element: <Scan />,
      },
      {
        path : "upload2",
        element: <Upload2 />,
      },
      {
        path : "upload3",
        element: <Upload3 />,
      },
      {
        path : "report",
        element: <Report />,
      },
    ],
  },
  
 
 
]);

function App() {
  return (
    <RouterProvider
    router={router}/>
  );
}

export default App;
