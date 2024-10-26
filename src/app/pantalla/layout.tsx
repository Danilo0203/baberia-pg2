export default function PantallaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="min-h-dvh bg-fondo-pantalla">{children}</main>;
}
