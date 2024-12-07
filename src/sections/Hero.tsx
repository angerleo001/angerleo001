import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRooms from "../components/HackerRooms";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="sm:text-3xl text-xl text-white font-medium text-center font-generalsans">
            Hi, I'm Anger Leo <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Crafting Innovative Products & Strong Brands, One Project at a Time
            </p>
        </div>
        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0,0,30]} />
                <HackerRooms />
            </Canvas>
        </div>
        </section> 
      )
    }

export default Hero;