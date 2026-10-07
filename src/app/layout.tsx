import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "IntegralKey | Soluciones Inteligentes para Proteger, Conectar y Administrar",
  description: "Transformamos la Seguridad, la Tecnología y la Gestión Empresarial en Soluciones Inteligentes en Barranquilla. Seguridad electrónica, desarrollo de software, domótica y administración de propiedad horizontal.",
  keywords: "Seguridad electrónica Barranquilla, Desarrollo web Barranquilla, Domótica Barranquilla, Administración de propiedad horizontal Barranquilla",
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
