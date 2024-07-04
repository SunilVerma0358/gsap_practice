import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "",
  title: "Gsap-Task",
  description: "gsap pratice",
  openGraph: {
    title: "Gsap-Task",
    description: "gsap pratice",
    images: ["/assets/images/meta-tags-img.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> {children} </body>{" "}
    </html>
  );
}
