import React from 'react';
import './Main.css';
import Navigation from "../Navigation";
import Adverts from "./Adverts";
import Services from "./Services";
import Vote from "./Vote";
import {Container} from "react-bootstrap";
import SendOrder from "./SendOrder";
import Footer from "../Footer";
import Smile from "./Smile";
import Stats from "./Stats";

function Team() {
    return null;
}

function Main() {
  return (
    <div >
        <Adverts></Adverts>
        <div className={"p-2 text-center bg-body-secondary"}>
            Перечень наших услуг
        </div>
        <Services></Services>
        <Vote></Vote>
        <Smile></Smile>
        <SendOrder></SendOrder>
        <Team></Team>
        <Stats></Stats>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      {/*</header>*/}
      {/*<Test></Test>*/}
    </div>
  );
}

export default Main;
