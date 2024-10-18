import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './legacy/App';
import reportWebVitals from './legacy/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./Main/Main/Main";
import ErrorPage from "./ErrorPage";
import Navigation from "./Main/Navigation";
import Footer from "./Main/Footer";
import { Container } from "react-bootstrap";
import Consult from "./Main/Consult/Consult";
import Teaching from "./Main/Teaching/Teaching";
import Develop from "./Main/Develop/Develop";
import Mentoring from "./Main/Mentoring/Mentoring";
import Students from "./Main/Students/Students";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Main></Main>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/teaching",
        element: <Teaching></Teaching>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/consult",
        element: <Consult></Consult>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/develop",
        element: <Develop></Develop>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/students",
        element: <Students></Students>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/mentoring",
        element: <Mentoring></Mentoring>,
        errorElement: <ErrorPage/>
    },
])

root.render(
  <React.StrictMode>
      <Container className="App font-monospace col-md-10" >
          <Navigation></Navigation>
          {/*<Main></Main>*/}
          <RouterProvider router={router} />
          <div className={"py-5"}></div>
          <Footer></Footer>

      </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
