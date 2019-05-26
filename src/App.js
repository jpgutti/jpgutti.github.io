import React from 'react';
import './App.css'
import './components/Content'
import Myself from './assets/myself.jpeg'

import {
  ReactText, CssText
} from './components/Styled'
import Content from './components/Content';

const App = () => {
  return (
    <div id="jpgutti" className="container">
      <div className="head d-flex justify-content-between">
        <div className="head__left">
          <img id="Myselfie" alt="Me" src={Myself} />
          <div className="d-flex flex-column align-self-stretch">
            <h1>João Pedro Lima</h1>
            <h3>Front End Developer</h3>
            <a href="mailto:jpgutti08@hotmail.com">jpgutti08@hotmail.com</a>
            <span className="mt-auto">Toolbox: <ReactText>React.js</ReactText>, <CssText>CSS3</CssText></span>
          </div>
        </div>
        <div className="head__right text-right">

        </div>
      </div>
      <hr/>
      <Content/>
    </div>
  )
}

export default App;
