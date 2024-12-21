import type { Metadata } from "next";
import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"]});

const headingFont = Cormorant({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${headingFont.variable} antialiased bg-white`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
