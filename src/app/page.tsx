import Image from "next/image";
import home from "../../public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          src={home}
          alt="HomePage Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
