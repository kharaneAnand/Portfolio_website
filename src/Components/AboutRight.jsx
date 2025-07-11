import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { Boy } from "./Boy";

const AboutRight = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[450px] sm:h-[600px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 3.5 : 5] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={2} />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={5}
          color={"#1c34ff"}
        />

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
    </div>
  );
};

export default AboutRight;
