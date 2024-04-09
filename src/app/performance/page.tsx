import Hero from "@/components/Hero";
import performance from "../../../public/performance.jpg";

const PerformancePage = () => {
  return (
    <Hero
      imgAlt="Welding"
      imgData={performance}
      title="We serve high performance applications"
    />
  );
};

export default PerformancePage;
