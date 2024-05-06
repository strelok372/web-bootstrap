import React from 'react';
import logo from './logo.svg';
import '../App.css';

function Modules() {
    return (
        <div className="App">
            <div >
                {/*style="height:400;"*/}
                <div className="block">C# - доступно</div>

                <div className="block">Front-end - доступно</div>
                <div className="block">Python - в разработке</div>
                <div className="block">Алгоритмы - в разработке</div>
                <div className="block">Android, iOS, Java - по запросу</div>
                <div className="block">Основы программирования, язык программирования Си - по запросу</div>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Modules;
