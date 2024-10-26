import Image from "next/image";
import { ListaAtendiendo } from "./ListaAtendiendo";
import { ItemListaPaciente } from "./itemListaPaciente";

interface ItemListaAtendiendoProps {
  barber: string;
  perfil?: string;
  pacients?: {
    id: number | string;
    name: string;
  }[];
}

export const ItemListaAtendiendo = ({
  barber,
  pacients,
  perfil,
}: ItemListaAtendiendoProps) => {
  return (
    <li className="bg-card-atendiendo relative flex-1 rounded-3xl pt-14 text-center">
      {perfil && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={perfil}
            alt={`Fotografia de ${barber}`}
            width={100}
            height={100}
          />
        </div>
      )}
      <span className="text-2xl font-semibold"> {barber} </span>
      {pacients &&
        pacients.map((items) => (
          <ItemListaPaciente key={items.id} {...items} />
        ))}
    </li>
  );
};
