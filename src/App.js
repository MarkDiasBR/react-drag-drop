import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';
import { useState } from 'react';
import {useDrag} from '@use-gesture/react';

const SCREEN_HEIGHT = window.innerHeight;

function App() {
  const logoPos = useSpring({ x: 0, y: 0 })
  const bindLogoPos = useDrag((params)=>{
    console.log(params.event)
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  } );

/*   const [logoPos, setLogoPos] = useState({ x: 0, y: 0 });
  const bindLogoPos = useDrag(({ event, offset: [x, y] }) => {
    setLogoPos({ x, y });
  }, { drag: { axis: 'both' } });
 */
  const paragraphPos = useSpring({ x: 0, y: 0 })
  const bindParagraphPos = useDrag((params)=>{
    paragraphPos.x.set(params.offset[0]);
    paragraphPos.y.set(params.offset[1]);
  });

 /*  const [paragraphPos, setParagraphPos] = useState({ x: 0, y: 0 });
  const bindParagraphPos = useDrag(({ event, offset: [x, y] }) => {
    setParagraphPos({ x, y });
  }, { drag: { axis: 'both' } }); */

  const linkPos = useSpring({ x: 0, y: 0 })
  const bindLinkPos = useDrag((params)=>{
    linkPos.x.set(params.offset[0]);
    linkPos.y.set(params.offset[1]);
  });

/*   const [linkPos, setLinkPos] = useState({ x: 0, y: 0 });
  const bindLinkPos = useDrag(({ event, offset: [x, y] }) => {
    setLinkPos({ x, y });
  }, { drag: { axis: 'both' } }); */

  
  const handlePos = useSpring({ y: 0 })
  const bindHandlePos = useDrag((params)=>{
    console.log(params)
    const y = params.xy[1];
    if (params.dragging) {
      if (y >= 0 && y <= SCREEN_HEIGHT) {
        const adjustedHandlePos = y - 15;
        console.log(adjustedHandlePos, "adj h pos")
        handlePos.y.set(adjustedHandlePos);
      }      
    } else {
      if (y > SCREEN_HEIGHT / 2) {
        handlePos.y.start(SCREEN_HEIGHT - 30)
      } else {
        handlePos.y.start(0);
      }
    }
  });
  
  return (
    <div className="App">
      <animated.div {...bindHandlePos()} style={{y: handlePos.y, touchAction: 'none'}} className="App-handle-container">
        <div className="App-handle" />
      </animated.div>
      <animated.div {...bindHandlePos()} style={{
        y: handlePos.y,
        opacity: handlePos.y.to([0,SCREEN_HEIGHT],[1,0.4])
      }} className="App-overlay" />
      <div className="App-bg" />
      <header className="App-header">
        
        {/* <animated.div {...bindLogoPos()} style={{x: logoPos.x, y: logoPos.y}}>
          <img src={logo} className="App-logo" alt="logo" />
        </animated.div> */}

        <animated.div {...bindLogoPos()} style={{touchAction: 'none', x: logoPos.x, y: logoPos.y}}>
          <img src={logo} className="App-logo" alt="logo" />
        </animated.div>
          
        <animated.div {...bindParagraphPos()} style={{touchAction: 'none', x: paragraphPos.x, y: paragraphPos.y}}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </animated.div>

        <animated.div {...bindLinkPos()} style={{touchAction: 'none', x: linkPos.x, y: linkPos.y}}> 
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