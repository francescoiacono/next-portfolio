import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Church = () => {
  useThree(({ camera }) => {
    camera.position.set(200, 200, 300);
    camera.far = 1000000;
    camera.near = 0.01;
  });

  let churchModel = useGLTF('/chiesetta3.glb');

  return <primitive object={churchModel.scene} scale={28} />;
};

export default Church;
