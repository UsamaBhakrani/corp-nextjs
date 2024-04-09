import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <div>Home Page</div>
        <Link href="/performance">performance</Link>
        <Link href="/scale">scale</Link>
        <Link href="/reliability">reliability</Link>
      </nav>
    </div>
  );
}
