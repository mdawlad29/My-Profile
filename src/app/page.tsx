import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills/Skills"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <About />
        <Skills />
      </div>
    </>
  );
}
