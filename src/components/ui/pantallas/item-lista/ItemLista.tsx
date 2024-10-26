interface ItemListaProps {
  name: string;
  mode: "espera" | "atendiendo";
  status: "atendiendo" | "espera";
}
export const ItemLista = ({
  name,
  mode = "espera",
  status,
}: ItemListaProps) => {
  if (mode === "atendiendo") {
    return (
      <div className="bg-item-espera relative rounded-3xl bg-opacity-60 px-4 py-5 text-2xl">
        <div className="absolute right-0 top-0 -translate-x-1/4 translate-y-1/2 rounded-full bg-black px-3 py-1 text-xs">
          {status}
        </div>
        {name}
      </div>
    );
  }

  return (
    <li className="bg-item-espera relative rounded-3xl bg-opacity-60 px-4 py-5 text-2xl">
      <div className="absolute right-0 top-0 -translate-x-1/4 translate-y-1/2 rounded-full bg-black px-3 py-1 text-xs">
        Espera
      </div>
      {name}
    </li>
  );
};
