import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "GIS S.A.S. | Grupo Ingeniería y Soluciones",
  description: "Desarrollo de proyectos industriales, comerciales y residenciales bajo los más altos estándares. Ingeniería segura, eficiencia energética y talento certificado.",
  keywords: "Ingeniería industrial, Proyectos eléctricos, Proyectos mecánicos, Automatización, Energía solar, Mantenimiento industrial",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} antialiased text-corporate-grey bg-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
