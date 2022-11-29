import { OrbitControls } from '@react-three/drei';

function Experience() {
  return (
    <>
      <color args={['#695b5b']} attach='background' />

      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default Experience;
