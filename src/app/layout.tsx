import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/config/fonts";
import Providers from "@/providers";
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
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-background text-foreground antialiased light`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
