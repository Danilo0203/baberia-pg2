import Image from "next/image";
import { ItemLista } from "../item-lista/ItemLista";
import { Avatar } from "@nextui-org/avatar";

interface ItemListaAtendiendoProps {
  barber: string;
  perfil?: string;
  pacients?: {
    id: number | string;
    name: string;
    status?: string;
  }[];
}

export const ItemListaAtendiendo = ({
  barber,
  pacients,
  perfil,
}: ItemListaAtendiendoProps) => {
  return (
    <li className="relative flex-1 rounded-3xl bg-card-atendiendo pt-14 text-center">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        {perfil ? (
          <Avatar
            src={perfil}
            alt={`Fotografia de ${barber}`}
            isBordered
            className="h-24 w-24 text-large"
          />
        ) : (
          <Avatar showFallback src={perfil} className="h-24 w-24 text-large" />
        )}
      </div>
      <span className="text-2xl font-semibold"> {barber} </span>
      <ul className="mt-4 flex flex-col gap-4 px-14 pb-5">
        {pacients &&
          pacients.map((items) => (
            <ItemLista
              key={items.id}
              mode="atendiendo"
              name={items.name}
              status={items.status}
            />
          ))}
      </ul>
    </li>
  );
};
