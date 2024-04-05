import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flutter Library",
  description: "Build your next app even faster with Flutter Library.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen ${inter.className}`}>
        <aside className="hidden lg:block relative border-r-2">
          <Sidebar />
        </aside>
        <main className="flex flex-col items-center justify-between gap-10">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
