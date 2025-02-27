import Particles from "react-tsparticles";
import particlesConfig from "./particles-config.js";

const ParticleBackground = () => {
  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };
  return (
    <Particles
      options={particlesConfig}
      init={particlesLoaded}
      id="tsparticles"
      height="100vh"
      width="100vw"
    />
  );
};

export default ParticleBackground;
