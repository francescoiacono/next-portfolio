import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Church = () => {
  useThree(({ camera }) => {
    camera.position.set(250, 250, 400);
    camera.far = 1000000;
    camera.near = 0.01;
  });

  let church = useGLTF('/chiesetta3.glb');

  return <primitive object={church.scene} scale={28} />;
};

export default Church;
