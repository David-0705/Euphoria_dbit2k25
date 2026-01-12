import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Model from "./Model";


export default function ThreeScene({ paused }) {
  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScale(0.7);
        setPosition([0, -1, 0]);
      } else if (width < 1024) {
        setScale(0.7);
        setPosition([0, 0, 0]);
      } else {
        setScale(0.8);
        setPosition([0, 0, 0]);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      <Scene paused={paused} scale={scale} position={position} />
    </Canvas>
  );
}

function Scene({ paused, scale, position }) {
  const { gl } = useThree();
  const lightRef = useRef();

  useEffect(() => {
    if (paused) {
      gl.setAnimationLoop(null);
    }
    return () => gl.setAnimationLoop(null);
  }, [paused, gl]);

  // 🔥 Animate light
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t) * 5;
      lightRef.current.position.z = Math.cos(t) * 5;
      lightRef.current.position.y = 4 + Math.sin(t * 0.5);
    }
  });

  return (
    <>
      {/* <ambientLight intensity={0.8} /> */}
   

<directionalLight
  ref={lightRef}
  color="#0000ff  "     // warm key light
  intensity={1}
  position={[5, 5, 5]}
/>



      <Model scale={scale} position={position} />
      {/* <Environment preset="studio" /> */}
    </>
  );
}
