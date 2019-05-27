import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

const App = () => {
  return (
    <div id="jpgutti" className="">
      {/* <ReactTypingEffect eraseDelay={2000} speed={50} className="Typed" text={["HELLO.", "THIS IS MY PORTFOLIO"]} /> */}
      <Typing startDelay={1000}>
        <span className="Typed">
          HELLO.
          <Typing.Backspace count={6} speed={75} delay={2000} />
          MY NAME IS JOHN
          <Typing.Backspace count={15} speed={75} delay={2000} />
          AND I'LL BE YOUT GUIDE
          <Typing.Backspace count={22} speed={75} delay={2000} />
        </span>
      </Typing>
    </div>
  )
}

export default App;
