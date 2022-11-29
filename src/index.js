import React from 'react';
import { Canvas } from '@react-three/fiber';
import ReactDOM from 'react-dom/client';
import './index.css';
import Experience from './Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas
      camera={{
        position: [2, 2, 3],
      }}
    >
      <Experience />
    </Canvas>
  </React.StrictMode>
);
