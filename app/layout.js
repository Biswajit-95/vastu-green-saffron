// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Digital Vastu | Premium Modern Spiritual Harmony",
  description: "Premium modern spiritual harmony through digital Vastu, Astro-Vastu and holistic space design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-text overflow-x-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

