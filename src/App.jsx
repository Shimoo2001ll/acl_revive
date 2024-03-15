import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Componnents/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Componnents/Login/Login'
import LayOut from './Componnents/LayOut/LayOut';
import HomeRid from './Componnents/HomeRid/HomeRid';
import Scan from './Componnents/Scan/Scan';
import Report from './Componnents/Report/Report';
import ForgetPass from './Componnents/ForgetPass/ForgetPass';
import Verify from './Componnents/ForgetPass/Verify';
import Newpass from './Componnents/ForgetPass/Newpass';
import Upload2 from './Componnents/Scan/Upload2';
import Upload3 from './Componnents/Scan/Upload3';
import  Profile  from './Componnents/Profile/Profile';
import  Service  from './Componnents/Service/Service';
import  Patiant  from './Componnents/Patiant/Patiant';
import Review from './Componnents/ReviewPatiant/Review';
import Add from './Componnents/AddConnection/Add';
import EditEmail from './Componnents/Edit/EditEmail/EditEmail';
import ADDmail from './Componnents/Edit/AddMail/ADDmail';
import VaryEmail from './Componnents/Edit/AddMail/VaryEmail';
import EditPass from './Componnents/Edit/EditPass/EditPass';

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
    path : "HomeRid",
    element: <HomeRid />,
  },
  {
    path : "EditEmail",
    element: <EditEmail />,
  },{
    path:"ADDmail",
    element:<ADDmail/>,
  },
 {
    path:"VaryEmail",
    element:<VaryEmail/>,
  },
 {
    path:"EditPass",
    element:<EditPass/>,
  },
  {
    path: "/",
    element: <LayOut />,
    children: [
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
      {
        path : "patiant",
        element: <Patiant />,
      },
      {
        path : "review",
        element: <Review />,
      },
      {
        path : "services",
        element: <Service />,
      },
      {
        path : "add",
        element: <Add />,
      },
      {
        path : "profile",
        element: <Profile />,
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
