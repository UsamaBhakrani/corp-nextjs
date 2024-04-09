import Hero from "@/components/Hero";
import home from "../../public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgAlt="HomePage Image"
      imgData={home}
      title="Professional Cloud Hosting"
    />
  );
}
