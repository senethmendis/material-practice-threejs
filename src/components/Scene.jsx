import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas style={{ backgroundColor: "black" }}>
      <directionalLight intensity={3} position={[0, 3, 1]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
};

export default Scene;
