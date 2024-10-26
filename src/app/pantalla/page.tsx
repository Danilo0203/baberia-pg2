import { Header } from "@/components/header/Header";
import { ListaAtendiendo } from "@/components/ui/pantallas/lista-atendiendo/ListaAtendiendo";
import { ListaEspera } from "@/components/ui/pantallas/lista-espera/ListaEspera";

export default function PantallaPage() {
  return (
    <section className="container mx-auto flex min-h-dvh flex-1 flex-col py-10">
      <Header />
      <ListaEspera />
      <ListaAtendiendo />
    </section>
  );
}
