import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {useDrag} from '@use-gesture/react';

function App() {
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })
  const bindLogoPos = useDrag((params)=>{
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1]
    })
  });

  const logoPosSpring = useSpring({ x: 0, y: 0 })
  const bindLogoPosSpring = useDrag((params)=>{
      logoPosSpring.x.set(params.offset[0]);
      logoPosSpring.y.set(params.offset[1]);
  });
  
  return (
    <div className="App">
      <header className="App-header">
        
        <div {...bindLogoPos()} style={{position:'relative', top: logoPos.y, left: logoPos.x}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          
        <animated.div {...bindLogoPosSpring()} style={{x: logoPosSpring.x, y: logoPosSpring.y}}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </animated.div>

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

export default App;
