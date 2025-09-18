import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ model, scale }) => {
    const gltf = useLoader(GLTFLoader, model);
    return (
        <>
            <primitive object={gltf.scene} scale={scale} />
        </>
    );
};

export default function ThreeJSModels({ modelName, scale = 2 }) {
    return (
        <div>
            <Canvas style={{ width: '70%', height: '70%', borderRadius: '10px', paddingBottom: '.5em' }}>
                <Model model={modelName} scale={scale} />
                <ambientLight intensity={1.5} />
                <directionalLight color="white" position={[0, 2, 0]} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
