import Article from "@/components/article/Article";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Screen from "@/components/screen/Screen";
import Template from "@/components/template/Template";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-5">
      <Navbar />
      <Header />
      <Template />
      <Article />
      <Screen />
      <Footer />
    </main>
  );
}
