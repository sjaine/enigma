import { Geist, Geist_Mono, Londrina_Solid, Archivo_Narrow, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LondrinaSolid = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
});

const ArchivoNarrow = Archivo_Narrow({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const fontManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


export const metadata = {
  title: "Enigma",
  description: "Explore new world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${LondrinaSolid.variable} ${ArchivoNarrow.variable} ${fontManrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
