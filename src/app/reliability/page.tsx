import Hero from "@/components/Hero";
import reliability from "../../../public/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <Hero
      imgAlt="Reliability"
      imgData={reliability}
      title="Super high reliability hosting"
    />
  );
};

export default ReliabilityPage;
