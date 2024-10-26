import { ItemLista } from "../item-lista/ItemLista";

export const ListaEspera = () => {
  const listaEspera = [
    {
      id: 1,
      name: "Fernando",
    },
    {
      id: 2,
      name: "Danilo",
    },
    {
      id: 3,
      name: "Danilo",
    },
    {
      id: 4,
      name: "Danilo",
    },
  ];
  return (
    <nav className="mb-8 flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">En Espera:</h2>
      <ul className="grid flex-1 grid-cols-4 gap-10">
        {listaEspera.map(({ id, name }) => (
          <ItemLista key={id} name={name} />
        ))}
      </ul>
    </nav>
  );
};
