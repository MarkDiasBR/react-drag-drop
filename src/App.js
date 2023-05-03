import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useDrag} from '@use-gesture/react';

function App() {
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })
  const bindLogoPos = useDrag((params)=>{
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1]
    })
  });

  const [paragraphPos, setParagraphPos] = useState({ x: 0, y: 0 })
  const bindParagraphPos = useDrag((params)=>{
    setParagraphPos({
      x: params.offset[0],
      y: params.offset[1]
    })
  });

  const [linkPos, setLinkPos] = useState({ x: 0, y: 0 })
  const bindLinkPos = useDrag((params)=>{
    setLinkPos({
      x: params.offset[0],
      y: params.offset[1]
    })
  });
  
  return (
    <div className="App">
      <header className="App-header">
        
        <div {...bindLogoPos()} style={{position:'relative', top: logoPos.y, left: logoPos.x}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          
        <div {...bindParagraphPos()} style={{position:'relative', top: paragraphPos.y, left: paragraphPos.x}}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div {...bindLinkPos()} style={{position:'relative', top: linkPos.y, left: linkPos.x}}>
          <a 
            draggable='false'
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
