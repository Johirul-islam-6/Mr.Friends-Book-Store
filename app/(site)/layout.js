// import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Layout/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/Components/Layout/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr Friends",
  description: "Our Book store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
