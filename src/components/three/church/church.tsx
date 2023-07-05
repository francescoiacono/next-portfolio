import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Church = () => {
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    // Check screen size and set camera position accordingly
    if (window.innerWidth < 425) {
      setPosition([200, 200, 300]);
    } else if (window.innerWidth < 768) {
      setPosition([250, 250, 350]);
    } else if (window.innerWidth < 1024) {
      setPosition([300, 300, 400]);
    } else {
      setPosition([350, 350, 450]);
    }
  }, []);

  useThree(({ camera }) => {
    camera.position.set(position[0], position[1], position[2]);
    camera.far = 1000000;
    camera.near = 0.01;
  });

  const ref = useRef<THREE.Object3D>();

  useFrame((_, delta) => {
    if (ref.current === undefined) return;

    ref.current.rotation.y += 0.1 * delta;
  });

  let churchModel = useGLTF('/chiesetta3.glb');

  return <primitive ref={ref} object={churchModel.scene} scale={28} />;
};

export default Church;
