import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';
import {useDrag} from '@use-gesture/react';

const SCREEN_HEIGHT = window.innerHeight - 30;

function App() {
  const logoPos = useSpring({ x: 0, y: 0 })
  const bindLogoPos = useDrag((params)=>{
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  const paragraphPos = useSpring({ x: 0, y: 0 })
  const bindParagraphPos = useDrag((params)=>{
    paragraphPos.x.set(params.offset[0]);
    paragraphPos.y.set(params.offset[1]);
  });

  const linkPos = useSpring({ x: 0, y: 0 })
  const bindLinkPos = useDrag((params)=>{
    linkPos.x.set(params.offset[0]);
    linkPos.y.set(params.offset[1]);
  });

  const handlePos = useSpring({ y: 0 })
  const bindHandlePos = useDrag((params)=>{
    const y = params.xy[1];
    if (params.dragging) {
      if (y >= 0 && y <= SCREEN_HEIGHT) {
        handlePos.y.set(y);
      }      
    } else {
      if (y > SCREEN_HEIGHT / 2) {
        handlePos.y.start(SCREEN_HEIGHT)
      } else {
        handlePos.y.start(0);
      }
    }
  });
  
  return (
    <div className="App">
      <animated.div {...bindHandlePos()} style={{y: handlePos.y}} className="App-handle-container">
        <div className="App-handle" />
      </animated.div>
      <animated.div {...bindHandlePos()} style={{
        y: handlePos.y,
        opacity: handlePos.y.to([0,SCREEN_HEIGHT],[1,0.4])
      }} className="App-overlay" />
      <div className="App-bg" />
      <header className="App-header">
        
        <animated.div {...bindLogoPos()} style={{x: logoPos.x, y: logoPos.y}}>
          <img src={logo} className="App-logo" alt="logo" />
        </animated.div>
          
        <animated.div {...bindParagraphPos()} style={{x: paragraphPos.x, y: paragraphPos.y}}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </animated.div>

        <animated.div {...bindLinkPos()} style={{x: linkPos.x, y: linkPos.y}}> 
          <a 
            draggable='false'
            className="App-link"
            // href="https://reactjs.org"
            // href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'underline'}}
          >
            Learn React
          </a>
        </animated.div>

      </header>
    </div>
  );
}

export default App;