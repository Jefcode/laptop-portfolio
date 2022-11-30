import React from 'react';
import { Canvas } from '@react-three/fiber';
import ReactDOM from 'react-dom/client';

import { Loader } from '@react-three/drei';
import Experience from './Experience';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas
      camera={{
        position: [-2, 1.5, 3],
      }}
    >
      <Experience />
    </Canvas>
    <Loader />
  </React.StrictMode>
);
