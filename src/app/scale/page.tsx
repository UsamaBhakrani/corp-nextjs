import Hero from "@/components/Hero";
import scale from "../../../public/scale.jpg";

const ScalePage = () => {
  return (
    <Hero
      imgAlt="Steel Factory"
      imgData={scale}
      title="Scale your apps to infinity"
    />
  );
};

export default ScalePage;
