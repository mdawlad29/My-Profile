import { PageLayout } from "@/layouts/PageLayout";
import { Footer } from "@/partials/Footer";
import { Header } from "@/partials/Header";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0px)",
          backgroundSize: "20px 20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          explicabo ipsum eaque, repellendus veniam ab. Doloribus, iusto nobis
          quasi excepturi temporibus debitis, quaerat recusandae inventore at
          fugiat blanditiis reprehenderit obcaecati.
        </p>
      </div>

      <Footer />
    </PageLayout>
  );
}
