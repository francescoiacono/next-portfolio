'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from './loader/loader';
import styles from './threeScene.module.css';
import Church from './church/church';

const Scene = () => {
  return (
    <div className={styles.scene}>
      <Canvas flat shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach='shadow-camera'
            args={[-10, 10, 10, -10]}
          />

          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Church />
          </Suspense>
          <pointLight position={[10, 10, 100]} intensity={1} />
        </directionalLight>
      </Canvas>
    </div>
  );
};

export default Scene;
