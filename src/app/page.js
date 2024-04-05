import Article from "@/components/article/Article";
import Header from "@/components/header/Header";
import Screen from "@/components/screen/Screen";
import Template from "@/components/template/Template";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-5">
      <Header />
      <Template />
      <Article />
      <Screen />
    </main>
  );
}
