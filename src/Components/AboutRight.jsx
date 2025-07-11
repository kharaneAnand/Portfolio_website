import { Text3D } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber"; // Assuming you are using react-three-fiber
import { Boy } from "./Boy";

const AboutRight = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"} />

      <group>
        <Text3D
          position={[-2, -3, -2]}
          curvesegment={32}
          bevelEnabled
          bevalSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.7}
          letterspacing={-0.06}
          size={0.6}
          font={"/fonts/Inter_Bold.json"}
        >
          {`Hello\nI'm Anand`}
          <meshNormalMaterial />
        </Text3D>

        <Boy scale={3.5} position={[0, -3, -2]} />
      </group>
    </Canvas>
  );
};

export default AboutRight;
