// app/layout.jsx
import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const metadata = {
  title: "Digital Vastu | Premium Modern Spiritual Harmony",
  description:
    "Premium modern spiritual harmony through digital Vastu, Astro-Vastu and holistic space design.",
};

// Load fonts using next/font/google
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="bg-brand-bg text-brand-text overflow-x-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
