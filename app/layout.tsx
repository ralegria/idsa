import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import CustomLayout from "./layout/CustomLayout";

import "./globals.css";

const poppinsSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grupo IDSA",
  description: "Ecommercer Site de Grupo IDSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>
        <CustomLayout />
        {children}
      </body>
    </html>
  );
}
